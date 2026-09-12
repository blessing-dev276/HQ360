import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Sparkles } from "lucide-react";
import { TEAM } from "@/data/team";
import { PHOTOS as TEAM_PHOTOS } from "@/components/site/TeamAvatar";
import { fetchPublicContent } from "@/lib/public-content";
import "./team-showcase.css";

type Person = {
  key: string;
  name: string;
  role: string;
  blurb: string;
  photo?: string | undefined;
  imageUrl?: string | undefined;
};

const FALLBACK: Person[] = TEAM.map((m) => ({
  key: m.name,
  name: m.name,
  role: m.role,
  blurb: m.blurb,
  photo: m.photo,
}));

function initialsFor(name: string) {
  return name.slice(0, 1).toUpperCase();
}

/**
 * The team showcase — a grid of flip cards. Front: portrait, name, role.
 * Back (hover / focus / tap): what they own. Shared by the homepage (a
 * `limit` + "view all" link back to /about#team) and the About page (the
 * full roster, no limit). One card design, one interaction, everywhere the
 * team appears.
 *
 * Pulls the admin-managed roster (image + blurb, both editable from
 * /admin > Team) and falls back to the bundled roster if that fails.
 */
export function TeamShowcase({
  eyebrow = "The people behind it",
  title,
  limit,
  viewAll,
}: {
  eyebrow?: string;
  title: ReactNode;
  /** Show only the first N members (used on the homepage). */
  limit?: number;
  /** Optional "see everyone" link shown under a limited grid. */
  viewAll?: { label: string; to: string };
}) {
  const query = useQuery({
    queryKey: ["public", "team"],
    queryFn: ({ signal }) =>
      fetchPublicContent<{
        members: {
          id: string;
          name: string;
          title: string;
          image_url: string | null;
          blurb: string | null;
        }[];
      }>("/api/public/team", signal),
  });

  const all: Person[] = query.data?.members.length
    ? query.data.members.map((m) => {
        const key = m.name.trim().toLowerCase().split(/\s+/)[0] ?? m.id;
        return {
          key: m.id,
          name: m.name,
          role: m.title,
          blurb: m.blurb || TEAM.find((t) => t.photo === key)?.blurb || "",
          photo: key,
          imageUrl: m.image_url ?? undefined,
        };
      })
    : FALLBACK;
  const people = limit ? all.slice(0, limit) : all;

  return (
    <div className="ts-wrap">
      <div className="ts-head">
        <p className="ts-eyebrow">
          <span /> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      <ul className="ts-grid">
        {people.map((person) => (
          <li key={person.key}>
            <TeamCard person={person} />
          </li>
        ))}
      </ul>
      {viewAll ? (
        <Link to={viewAll.to} className="ts-view-all">
          {viewAll.label} <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}

function TeamCard({ person }: { person: Person }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const src = person.imageUrl || (person.photo ? TEAM_PHOTOS[person.photo] : undefined);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const el = cardRef.current;
    if (!el) return;
    const bounds = el.getBoundingClientRect();
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 10).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 10).toFixed(2)}deg`);
  }

  function resetTilt() {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div ref={cardRef} className="ts-card" onPointerMove={onPointerMove} onPointerLeave={resetTilt}>
      <button
        type="button"
        className="ts-flip"
        data-flipped={flipped || undefined}
        aria-pressed={flipped}
        aria-label={`${person.name}, ${person.role}.${person.blurb ? ` ${person.blurb}` : ""}`}
        onClick={() => setFlipped((f) => !f)}
      >
        <span className="ts-face ts-front" aria-hidden="true">
          <span className="ts-photo">
            {src ? (
              <img src={src} alt="" loading="lazy" decoding="async" />
            ) : (
              <span className="ts-fallback">{initialsFor(person.name)}</span>
            )}
            <span className="ts-spark">
              <Sparkles aria-hidden="true" />
            </span>
          </span>
          <span className="ts-caption">
            <strong>{person.name}</strong>
            <span>{person.role}</span>
          </span>
        </span>
        <span className="ts-face ts-back" aria-hidden="true">
          <span className="ts-back-eyebrow">What {person.name.split(" ")[0]} owns</span>
          {person.blurb ? (
            <p className="ts-back-blurb">{person.blurb}</p>
          ) : (
            <p className="ts-back-blurb ts-back-blurb-muted">{person.role}</p>
          )}
          <span className="ts-back-name">{person.name}</span>
        </span>
      </button>
    </div>
  );
}
