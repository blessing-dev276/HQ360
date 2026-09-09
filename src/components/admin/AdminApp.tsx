import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { CAPABILITIES } from "@/data/capabilities";
import { INDUSTRIES } from "@/data/industries";

/* ------------------------------------------------------------------ types */

type MediaType = "image" | "video";

type Item = {
  id: string;
  title: string;
  description: string | null;
  media_type: MediaType;
  media_url: string;
  thumbnail_url: string | null;
  capability_slug: string;
  industry_slug: string | null;
  external_link: string | null;
  sort_order: number;
  published: boolean;
};

type Draft = {
  id?: string;
  title: string;
  description: string;
  mediaType: MediaType;
  mediaUrl: string;
  thumbnailUrl: string;
  capabilitySlug: string;
  industrySlug: string;
  externalLink: string;
  published: boolean;
};

const CAPABILITY_OPTIONS = CAPABILITIES.map((c) => ({ value: c.slug, label: c.name }));
const INDUSTRY_OPTIONS = INDUSTRIES.map((i) => ({ value: i.slug, label: i.shortName }));

function industryName(slug: string | null) {
  if (!slug) return "Unassigned";
  return INDUSTRIES.find((i) => i.slug === slug)?.shortName ?? slug;
}

const emptyDraft: Draft = {
  title: "",
  description: "",
  mediaType: "image",
  mediaUrl: "",
  thumbnailUrl: "",
  capabilitySlug: CAPABILITY_OPTIONS[0]?.value ?? "",
  industrySlug: "",
  externalLink: "",
  published: true,
};

/* --------------------------------------------------------------- fetchers */

async function api<T>(url: string, init?: RequestInit): Promise<{ status: number; body: T }> {
  const isForm = init?.body instanceof FormData;
  const res = await fetch(url, {
    ...init,
    ...(isForm ? {} : { headers: { "content-type": "application/json" } }),
  });
  const body = (await res.json().catch(() => ({}))) as T;
  return { status: res.status, body };
}

/* ------------------------------------------------------------------- root */

type Tab = "portfolio" | "team";

const input =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function AdminApp() {
  const [tab, setTab] = useState<Tab>("portfolio");

  return (
    <div className="min-h-[70vh] bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">HQ360 admin</p>
          <h1 className="mt-1 font-display text-2xl">
            {tab === "portfolio" ? "Service portfolio" : "Team"}
          </h1>
        </div>

        <div className="mt-6 flex gap-1 rounded-full border border-border bg-card p-1 text-sm">
          {(["portfolio", "team"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "rounded-full px-4 py-1.5 font-medium capitalize transition",
                tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "portfolio" ? <PortfolioDashboard /> : <TeamDashboard />}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------- portfolio dashboard */

function PortfolioDashboard() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [loadError, setLoadError] = useState("");
  const [editing, setEditing] = useState<Draft | null>(null);
  const [view, setView] = useState<"grouped" | "flat">("grouped");
  const dragId = useRef<string | null>(null);

  const load = useCallback(async () => {
    const { status, body } = await api<{ ok: boolean; items: Item[] }>("/api/admin/portfolio");
    if (status === 200 && body.ok) {
      setItems(body.items);
      setLoadError("");
    } else {
      setLoadError(
        status === 503
          ? "Storage is not connected yet (missing Supabase service role key)."
          : "Could not load portfolio items.",
      );
      setItems([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const groups = useMemo(() => {
    const list = items ?? [];
    const known = CAPABILITY_OPTIONS.map((c) => ({
      slug: c.value,
      label: c.label,
      items: list.filter((i) => i.capability_slug === c.value),
    }));
    const otherSlugs = [
      ...new Set(
        list
          .filter((i) => !CAPABILITY_OPTIONS.some((c) => c.value === i.capability_slug))
          .map((i) => i.capability_slug),
      ),
    ];
    const other = otherSlugs.map((slug) => ({
      slug,
      label: slug,
      items: list.filter((i) => i.capability_slug === slug),
    }));
    return [...known, ...other].filter((g) => g.items.length > 0);
  }, [items]);

  const persistOrder = useCallback(async (ordered: Item[]) => {
    setItems(ordered);
    await api("/api/admin/portfolio/reorder", {
      method: "POST",
      body: JSON.stringify({ ids: ordered.map((i) => i.id) }),
    });
  }, []);

  /** Reorder within a capability group, keeping the other groups' order stable. */
  const reorderWithinGroup = useCallback(
    (groupSlug: string, fromId: string, toId: string) => {
      if (!items || fromId === toId) return;
      const group = items.filter((i) => i.capability_slug === groupSlug);
      const from = group.findIndex((i) => i.id === fromId);
      const to = group.findIndex((i) => i.id === toId);
      if (from < 0 || to < 0) return;
      const next = [...group];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved!);
      const rebuilt: Item[] = [];
      const seen = new Set<string>();
      for (const it of items) {
        if (it.capability_slug === groupSlug) {
          if (!seen.has(groupSlug)) {
            rebuilt.push(...next);
            seen.add(groupSlug);
          }
        } else {
          rebuilt.push(it);
        }
      }
      void persistOrder(rebuilt);
    },
    [items, persistOrder],
  );

  const move = useCallback(
    (groupSlug: string, id: string, dir: -1 | 1) => {
      if (!items) return;
      const group = items.filter((i) => i.capability_slug === groupSlug);
      const idx = group.findIndex((i) => i.id === id);
      const target = idx + dir;
      if (idx < 0 || target < 0 || target >= group.length) return;
      reorderWithinGroup(groupSlug, id, group[target]!.id);
    },
    [items, reorderWithinGroup],
  );

  /** Reorder across the whole flat list (ignores capability grouping). */
  const reorderFlat = useCallback(
    (fromId: string, toId: string) => {
      if (!items || fromId === toId) return;
      const from = items.findIndex((i) => i.id === fromId);
      const to = items.findIndex((i) => i.id === toId);
      if (from < 0 || to < 0) return;
      const next = [...items];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved!);
      void persistOrder(next);
    },
    [items, persistOrder],
  );

  const moveFlat = useCallback(
    (id: string, dir: -1 | 1) => {
      if (!items) return;
      const idx = items.findIndex((i) => i.id === id);
      const target = idx + dir;
      if (idx < 0 || target < 0 || target >= items.length) return;
      reorderFlat(id, items[target]!.id);
    },
    [items, reorderFlat],
  );

  async function saveDraft(draft: Draft) {
    const payload = {
      title: draft.title,
      description: draft.description,
      mediaType: draft.mediaType,
      mediaUrl: draft.mediaUrl,
      thumbnailUrl: draft.thumbnailUrl,
      capabilitySlug: draft.capabilitySlug,
      industrySlug: draft.industrySlug,
      externalLink: draft.externalLink,
      published: draft.published,
    };
    const { status, body } = draft.id
      ? await api<{ ok: boolean }>(`/api/admin/portfolio/${draft.id}`, {
          method: "PATCH",
          body: JSON.stringify(payload),
        })
      : await api<{ ok: boolean }>("/api/admin/portfolio", {
          method: "POST",
          body: JSON.stringify(payload),
        });
    if (status === 200 && body.ok) {
      setEditing(null);
      await load();
      return true;
    }
    return false;
  }

  async function remove(id: string) {
    if (!window.confirm("Delete this portfolio item?")) return;
    await api(`/api/admin/portfolio/${id}`, { method: "DELETE" });
    await load();
  }

  async function togglePublish(it: Item) {
    await api(`/api/admin/portfolio/${it.id}`, {
      method: "PATCH",
      body: JSON.stringify({ published: !it.published }),
    });
    await load();
  }

  return (
    <div className="space-y-8">
      <ItemForm
        key={editing?.id ?? "new"}
        initial={editing ?? emptyDraft}
        onCancel={editing ? () => setEditing(null) : undefined}
        onSave={saveDraft}
      />

      {loadError ? (
        <p className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          {loadError}
        </p>
      ) : null}

      {items && items.length > 0 ? (
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {items.length} uploaded {items.length === 1 ? "item" : "items"}
          </p>
          <div className="flex rounded-full border border-border bg-card p-0.5 text-xs">
            {(["grouped", "flat"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={cn(
                  "rounded-full px-3 py-1 font-medium",
                  view === v ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
              >
                {v === "grouped" ? "By category" : "All items"}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {items === null ? (
        <p className="text-sm text-muted-foreground">Loading items…</p>
      ) : items.length === 0 && !loadError ? (
        <p className="text-sm text-muted-foreground">No portfolio items yet. Add one above.</p>
      ) : view === "flat" ? (
        <ul className="space-y-2">
          {items.map((it, i) => (
            <li
              key={it.id}
              draggable
              onDragStart={() => (dragId.current = it.id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragId.current) reorderFlat(dragId.current, it.id);
                dragId.current = null;
              }}
            >
              <ItemRow
                item={it}
                first={i === 0}
                last={i === items.length - 1}
                showCategory
                onUp={() => moveFlat(it.id, -1)}
                onDown={() => moveFlat(it.id, 1)}
                onEdit={() => setEditing(toDraft(it))}
                onDelete={() => void remove(it.id)}
                onTogglePublish={() => void togglePublish(it)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="space-y-8">
          {groups.map((group) => (
            <section key={group.slug}>
              <h2 className="text-sm font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {group.label} <span className="text-foreground/40">({group.items.length})</span>
              </h2>
              <ul className="mt-3 space-y-2">
                {group.items.map((it, i) => (
                  <li
                    key={it.id}
                    draggable
                    onDragStart={() => (dragId.current = it.id)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (dragId.current) reorderWithinGroup(group.slug, dragId.current, it.id);
                      dragId.current = null;
                    }}
                  >
                    <ItemRow
                      item={it}
                      first={i === 0}
                      last={i === group.items.length - 1}
                      onUp={() => move(group.slug, it.id, -1)}
                      onDown={() => move(group.slug, it.id, 1)}
                      onEdit={() => setEditing(toDraft(it))}
                      onDelete={() => void remove(it.id)}
                      onTogglePublish={() => void togglePublish(it)}
                    />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function toDraft(it: Item): Draft {
  return {
    id: it.id,
    title: it.title,
    description: it.description ?? "",
    mediaType: it.media_type,
    mediaUrl: it.media_url,
    thumbnailUrl: it.thumbnail_url ?? "",
    capabilitySlug: it.capability_slug,
    industrySlug: it.industry_slug ?? "",
    externalLink: it.external_link ?? "",
    published: it.published,
  };
}

/* --------------------------------------------------------------- item row */

function ItemRow({
  item,
  first,
  last,
  showCategory,
  onUp,
  onDown,
  onEdit,
  onDelete,
  onTogglePublish,
}: {
  item: Item;
  first: boolean;
  last: boolean;
  showCategory?: boolean;
  onUp: () => void;
  onDown: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onTogglePublish: () => void;
}) {
  const categoryLabel =
    CAPABILITY_OPTIONS.find((c) => c.value === item.capability_slug)?.label ?? item.capability_slug;
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
      <span
        className="cursor-grab select-none px-1 text-muted-foreground"
        title="Drag to reorder"
        aria-hidden="true"
      >
        ⠿
      </span>
      <div className="size-16 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
        {item.media_type === "video" ? (
          <video
            src={item.media_url}
            poster={item.thumbnail_url ?? undefined}
            muted
            playsInline
            className="size-full object-cover"
          />
        ) : (
          <img src={item.media_url} alt="" className="size-full object-cover" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{item.title}</p>
        <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          {showCategory ? (
            <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[oklch(0.42_0.16_42)]">
              {categoryLabel}
            </span>
          ) : null}
          <span className="rounded-full bg-secondary px-2 py-0.5">
            {industryName(item.industry_slug)}
          </span>
          <span className="rounded-full bg-secondary px-2 py-0.5 capitalize">{item.media_type}</span>
          <button
            type="button"
            onClick={onTogglePublish}
            className={cn(
              "rounded-full px-2 py-0.5",
              item.published
                ? "bg-brand-soft text-[oklch(0.42_0.16_42)]"
                : "bg-secondary text-muted-foreground line-through",
            )}
          >
            {item.published ? "Published" : "Hidden"}
          </button>
        </p>
      </div>
      <RowControls
        first={first}
        last={last}
        onUp={onUp}
        onDown={onDown}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}

function RowControls({
  first,
  last,
  onUp,
  onDown,
  onEdit,
  onDelete,
}: {
  first: boolean;
  last: boolean;
  onUp: () => void;
  onDown: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <button
        type="button"
        onClick={onUp}
        disabled={first}
        aria-label="Move up"
        className="rounded-md border border-border px-2 py-1 text-xs disabled:opacity-30"
      >
        ↑
      </button>
      <button
        type="button"
        onClick={onDown}
        disabled={last}
        aria-label="Move down"
        className="rounded-md border border-border px-2 py-1 text-xs disabled:opacity-30"
      >
        ↓
      </button>
      <button
        type="button"
        onClick={onEdit}
        className="rounded-md border border-border px-2.5 py-1 text-xs font-medium hover:border-brand hover:text-brand"
      >
        Edit
      </button>
      <button
        type="button"
        onClick={onDelete}
        className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-destructive hover:border-destructive"
      >
        Delete
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------- form */

function ItemForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Draft;
  onSave: (d: Draft) => Promise<boolean>;
  onCancel?: (() => void) | undefined;
}) {
  const [draft, setDraft] = useState<Draft>(initial);
  const [mode, setMode] = useState<"upload" | "url">(initial.mediaUrl ? "url" : "upload");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof Draft>(k: K, v: Draft[K]) => setDraft((d) => ({ ...d, [k]: v }));

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        url?: string;
        mediaType?: MediaType;
        error?: string;
      };
      if (res.ok && body.ok && body.url) {
        setDraft((d) => ({
          ...d,
          mediaUrl: body.url!,
          mediaType: body.mediaType ?? d.mediaType,
        }));
      } else {
        setError(
          body.error === "too_large"
            ? "File is over 50 MB. Host it elsewhere and paste the URL."
            : body.error === "unsupported_type"
              ? "Unsupported file type."
              : body.error === "unavailable"
                ? "Uploads need the Supabase service role key configured."
                : "Upload failed.",
        );
      }
    } catch {
      setError("Upload failed.");
    }
    setUploading(false);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!draft.title.trim()) return setError("Title is required.");
    if (!draft.mediaUrl.trim()) return setError("Upload a file or paste a media URL.");
    setSaving(true);
    const ok = await onSave(draft);
    setSaving(false);
    if (!ok) setError("Could not save. Check the fields and try again.");
    else if (!draft.id) setDraft(emptyDraft);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg">{draft.id ? "Edit item" : "Add portfolio item"}</h2>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
        ) : null}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Title</span>
          <input
            className={cn(input, "mt-1.5")}
            value={draft.title}
            onChange={(e) => set("title", e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">External link (optional)</span>
          <input
            className={cn(input, "mt-1.5")}
            placeholder="https://…"
            value={draft.externalLink}
            onChange={(e) => set("externalLink", e.target.value)}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Service category</span>
          <select
            className={cn(input, "mt-1.5")}
            value={draft.capabilitySlug}
            onChange={(e) => set("capabilitySlug", e.target.value)}
          >
            {CAPABILITY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium">Industry</span>
          <select
            className={cn(input, "mt-1.5")}
            value={draft.industrySlug}
            onChange={(e) => set("industrySlug", e.target.value)}
          >
            <option value="">— Unassigned —</option>
            {INDUSTRY_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm font-medium">Description (optional)</span>
        <textarea
          rows={2}
          className={cn(input, "mt-1.5 resize-y")}
          value={draft.description}
          onChange={(e) => set("description", e.target.value)}
        />
      </label>

      {/* Media */}
      <div className="mt-4 rounded-xl border border-border bg-background p-4">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Media</span>
          <div className="ml-auto flex rounded-full border border-border p-0.5 text-xs">
            {(["upload", "url"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={cn(
                  "rounded-full px-3 py-1 font-medium capitalize",
                  mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground",
                )}
              >
                {m === "url" ? "Paste URL" : "Upload"}
              </button>
            ))}
          </div>
        </div>

        {mode === "upload" ? (
          <div className="mt-3">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={onFile}
              className="block w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Images or video up to 50 MB. Larger videos: host elsewhere and paste the URL.
            </p>
            {uploading ? <p className="mt-2 text-sm text-brand">Uploading…</p> : null}
          </div>
        ) : (
          <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_9rem]">
            <input
              className={input}
              placeholder="https://… (image or video URL)"
              value={draft.mediaUrl}
              onChange={(e) => set("mediaUrl", e.target.value)}
            />
            <select
              className={input}
              value={draft.mediaType}
              onChange={(e) => set("mediaType", e.target.value as MediaType)}
            >
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
        )}

        {draft.mediaType === "video" ? (
          <input
            className={cn(input, "mt-3")}
            placeholder="Thumbnail / poster image URL (optional)"
            value={draft.thumbnailUrl}
            onChange={(e) => set("thumbnailUrl", e.target.value)}
          />
        ) : null}

        {draft.mediaUrl ? (
          <div className="mt-3 flex items-center gap-3">
            <div className="size-20 overflow-hidden rounded-lg border border-border bg-secondary">
              {draft.mediaType === "video" ? (
                <video
                  src={draft.mediaUrl}
                  poster={draft.thumbnailUrl || undefined}
                  muted
                  playsInline
                  className="size-full object-cover"
                />
              ) : (
                <img src={draft.mediaUrl} alt="" className="size-full object-cover" />
              )}
            </div>
            <span className="truncate text-xs text-muted-foreground">{draft.mediaUrl}</span>
          </div>
        ) : null}
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={draft.published}
          onChange={(e) => set("published", e.target.checked)}
          className="size-4 accent-[var(--brand)]"
        />
        Published (visible on the public site)
      </label>

      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={saving || uploading}
        className="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-70"
      >
        {saving ? "Saving…" : draft.id ? "Save changes" : "Add item"}
      </button>
    </form>
  );
}

/* --------------------------------------------------------- team dashboard */

type Member = {
  id: string;
  name: string;
  title: string;
  image_url: string | null;
  sort_order: number;
  published: boolean;
};

type MemberDraft = {
  id?: string;
  name: string;
  title: string;
  imageUrl: string;
  published: boolean;
};

const emptyMemberDraft: MemberDraft = { name: "", title: "", imageUrl: "", published: true };

function TeamDashboard() {
  const [members, setMembers] = useState<Member[] | null>(null);
  const [loadError, setLoadError] = useState("");
  const [editing, setEditing] = useState<MemberDraft | null>(null);
  const dragId = useRef<string | null>(null);

  const load = useCallback(async () => {
    const { status, body } = await api<{ ok: boolean; members: Member[] }>("/api/admin/team");
    if (status === 200 && body.ok) {
      setMembers(body.members);
      setLoadError("");
    } else {
      setLoadError(
        status === 503
          ? "Storage is not connected yet (missing Supabase service role key)."
          : "Could not load team members.",
      );
      setMembers([]);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const persistOrder = useCallback(async (ordered: Member[]) => {
    setMembers(ordered);
    await api("/api/admin/team/reorder", {
      method: "POST",
      body: JSON.stringify({ ids: ordered.map((m) => m.id) }),
    });
  }, []);

  const reorder = useCallback(
    (fromId: string, toId: string) => {
      if (!members || fromId === toId) return;
      const from = members.findIndex((m) => m.id === fromId);
      const to = members.findIndex((m) => m.id === toId);
      if (from < 0 || to < 0) return;
      const next = [...members];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved!);
      void persistOrder(next);
    },
    [members, persistOrder],
  );

  const move = useCallback(
    (id: string, dir: -1 | 1) => {
      if (!members) return;
      const idx = members.findIndex((m) => m.id === id);
      const target = idx + dir;
      if (idx < 0 || target < 0 || target >= members.length) return;
      reorder(id, members[target]!.id);
    },
    [members, reorder],
  );

  async function saveDraft(draft: MemberDraft) {
    const payload = { name: draft.name, title: draft.title, imageUrl: draft.imageUrl, published: draft.published };
    const { status, body } = draft.id
      ? await api<{ ok: boolean }>(`/api/admin/team/${draft.id}`, {
          method: "PATCH",
          body: JSON.stringify(payload),
        })
      : await api<{ ok: boolean }>("/api/admin/team", {
          method: "POST",
          body: JSON.stringify(payload),
        });
    if (status === 200 && body.ok) {
      setEditing(null);
      await load();
      return true;
    }
    return false;
  }

  async function remove(id: string) {
    if (!window.confirm("Remove this team member?")) return;
    await api(`/api/admin/team/${id}`, { method: "DELETE" });
    await load();
  }

  return (
    <div className="space-y-8">
      <MemberForm
        key={editing?.id ?? "new"}
        initial={editing ?? emptyMemberDraft}
        onCancel={editing ? () => setEditing(null) : undefined}
        onSave={saveDraft}
      />

      {loadError ? (
        <p className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          {loadError}
        </p>
      ) : null}

      {members === null ? (
        <p className="text-sm text-muted-foreground">Loading team…</p>
      ) : members.length === 0 && !loadError ? (
        <p className="text-sm text-muted-foreground">No team members yet. Add one above.</p>
      ) : (
        <ul className="space-y-2">
          {members.map((m, i) => (
            <li
              key={m.id}
              draggable
              onDragStart={() => (dragId.current = m.id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (dragId.current) reorder(dragId.current, m.id);
                dragId.current = null;
              }}
            >
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                <span
                  className="cursor-grab select-none px-1 text-muted-foreground"
                  title="Drag to reorder"
                  aria-hidden="true"
                >
                  ⠿
                </span>
                <div className="size-16 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
                  {m.image_url ? (
                    <img src={m.image_url} alt="" className="size-full object-cover" />
                  ) : (
                    <span className="flex size-full items-center justify-center text-sm font-semibold text-muted-foreground">
                      {initialsFor(m.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{m.name}</p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="truncate">{m.title}</span>
                    <button
                      type="button"
                      onClick={async () => {
                        await api(`/api/admin/team/${m.id}`, {
                          method: "PATCH",
                          body: JSON.stringify({ published: !m.published }),
                        });
                        await load();
                      }}
                      className={cn(
                        "rounded-full px-2 py-0.5",
                        m.published
                          ? "bg-brand-soft text-[oklch(0.42_0.16_42)]"
                          : "bg-secondary text-muted-foreground line-through",
                      )}
                    >
                      {m.published ? "Published" : "Hidden"}
                    </button>
                  </p>
                </div>
                <RowControls
                  first={i === 0}
                  last={i === members.length - 1}
                  onUp={() => move(m.id, -1)}
                  onDown={() => move(m.id, 1)}
                  onEdit={() => setEditing(toMemberDraft(m))}
                  onDelete={() => void remove(m.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function initialsFor(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]!.toUpperCase())
      .join("") || "?"
  );
}

function toMemberDraft(m: Member): MemberDraft {
  return {
    id: m.id,
    name: m.name,
    title: m.title,
    imageUrl: m.image_url ?? "",
    published: m.published,
  };
}

function MemberForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: MemberDraft;
  onSave: (d: MemberDraft) => Promise<boolean>;
  onCancel?: (() => void) | undefined;
}) {
  const [draft, setDraft] = useState<MemberDraft>(initial);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const set = <K extends keyof MemberDraft>(k: K, v: MemberDraft[K]) =>
    setDraft((d) => ({ ...d, [k]: v }));

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    const fd = new FormData();
    fd.append("file", file);
    fd.append("bucket", "team");
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; url?: string; error?: string };
      if (res.ok && body.ok && body.url) {
        set("imageUrl", body.url);
      } else {
        setError(
          body.error === "too_large"
            ? "Image is over 50 MB."
            : body.error === "unsupported_type"
              ? "Unsupported file type."
              : body.error === "unavailable"
                ? "Uploads need the Supabase service role key configured."
                : "Upload failed.",
        );
      }
    } catch {
      setError("Upload failed.");
    }
    setUploading(false);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!draft.name.trim()) return setError("Name is required.");
    if (!draft.title.trim()) return setError("Title is required.");
    setSaving(true);
    const ok = await onSave(draft);
    setSaving(false);
    if (!ok) setError("Could not save. Try again.");
    else if (!draft.id) setDraft(emptyMemberDraft);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg">{draft.id ? "Edit member" : "Add team member"}</h2>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>
        ) : null}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input
            className={cn(input, "mt-1.5")}
            value={draft.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Title</span>
          <input
            className={cn(input, "mt-1.5")}
            placeholder="e.g. Brand & Design Lead"
            value={draft.title}
            onChange={(e) => set("title", e.target.value)}
          />
        </label>
      </div>

      <div className="mt-4 rounded-xl border border-border bg-background p-4">
        <span className="text-sm font-medium">Portrait</span>
        <div className="mt-3 flex items-center gap-4">
          <div className="size-20 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
            {draft.imageUrl ? (
              <img src={draft.imageUrl} alt="" className="size-full object-cover" />
            ) : (
              <span className="flex size-full items-center justify-center text-sm font-semibold text-muted-foreground">
                {draft.name ? initialsFor(draft.name) : "—"}
              </span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={onFile}
              className="block w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground"
            />
            <input
              className={cn(input, "mt-2")}
              placeholder="…or paste an image URL"
              value={draft.imageUrl}
              onChange={(e) => set("imageUrl", e.target.value)}
            />
            {uploading ? <p className="mt-2 text-sm text-brand">Uploading…</p> : null}
          </div>
        </div>
      </div>

      <label className="mt-4 flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={draft.published}
          onChange={(e) => set("published", e.target.checked)}
          className="size-4 accent-[var(--brand)]"
        />
        Published (visible on the public site)
      </label>

      {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={saving || uploading}
        className="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-70"
      >
        {saving ? "Saving…" : draft.id ? "Save changes" : "Add member"}
      </button>
    </form>
  );
}
