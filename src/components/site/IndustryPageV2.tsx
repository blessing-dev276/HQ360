import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { Industry, IndustryDiagnostic } from "@/data/industries";
import { Container } from "@/components/site/Primitives";
import { FaqSection } from "@/components/site/FaqSection";
import { ProjectInquiryForm } from "@/components/site/ProjectInquiryForm";
import { PortfolioStrip } from "@/components/site/PortfolioStrip";
import { getCaseStudy } from "@/data/work";
import "./industry-v2.css";

const num = (i: number) => String(i + 1).padStart(2, "0");

type DiagOption = IndustryDiagnostic["options"][number];

/** Roving-focus tab group — hover / focus / click / arrow keys all select. */
function useRoving(count: number) {
  const [active, setActive] = useState(0);
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const step =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? -1
          : 0;
    if (!step && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? count - 1 : (index + step + count) % count;
    setActive(next);
    e.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [next]?.focus();
  }
  return { active, setActive, onKeyDown };
}

function scrollToStart() {
  document.getElementById("start")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ------------------------------------------------------------------ page */

export function IndustryPageV2({
  industry,
  beforeCta,
}: {
  industry: Industry;
  beforeCta?: ReactNode;
}) {
  const [rec, setRec] = useState<DiagOption | null>(null);
  const prefill = rec
    ? `From the on-site diagnostic — "${rec.label}". Suggested starting point: ${rec.service}.`
    : undefined;

  return (
    <div className="indv2" data-motif={industry.visualTheme ?? "editorial"}>
      <Hero industry={industry} />
      <Problems industry={industry} />
      <System industry={industry} />
      <Services industry={industry} />
      <Proof industry={industry} />
      <Diagnostic industry={industry} onRecommend={setRec} />
      {industry.faqs.length > 0 ? <Faq industry={industry} /> : null}
      {beforeCta}
      <FinalCta industry={industry} prefill={prefill} rec={rec} />
    </div>
  );
}

/* -------------------------------------------------------------- 1 · hero */

function Hero({ industry }: { industry: Industry }) {
  const stages = industry.systemStages ?? [];
  const label = industry.finalCta?.label ?? industry.cta.label;
  return (
    <section className="v2-hero">
      <Container size="wide" className="relative z-10">
        <nav aria-label="Breadcrumb" className="v2-crumb">
          <Link to="/industries">Industries</Link>
          <span aria-hidden="true">/</span>
          <span>{industry.shortName}</span>
        </nav>
        <div className="v2-hero-copy">
          <p className="v2-eyebrow">
            <span /> {industry.eyebrow}
          </p>
          <h1>{industry.headline}</h1>
          <p className="v2-hero-lede">{industry.subheadline}</p>
          <div className="v2-actions">
            <a href="#start" className="v2-btn v2-btn-primary">
              {label} <ArrowUpRight aria-hidden="true" />
            </a>
            <Link to="/work" className="v2-btn v2-btn-ghost">
              See the work <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        {stages.length > 0 ? (
          <ol className="v2-hero-track" aria-label={`${industry.shortName} growth journey`}>
            {stages.map((s, i) => (
              <li key={s.id} style={{ "--i": String(i) } as Record<string, string>}>
                <span className="v2-hero-node">
                  <em>{num(i)}</em>
                  {s.label}
                </span>
                {i < stages.length - 1 ? (
                  <ArrowRight className="v2-hero-track-arrow" aria-hidden="true" />
                ) : null}
              </li>
            ))}
            <span className="v2-hero-spark" aria-hidden="true" />
          </ol>
        ) : null}
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- 2 · problems */

function Problems({ industry }: { industry: Industry }) {
  const problems = industry.problems ?? [];
  const { active, setActive, onKeyDown } = useRoving(Math.max(problems.length, 1));
  if (problems.length === 0) return null;
  const p = problems[Math.min(active, problems.length - 1)]!;
  return (
    <section className="v2-problems">
      <Container size="wide">
        <p className="v2-eyebrow">
          <span /> This may be what&rsquo;s holding you back
        </p>
        <div className="v2-problems-layout">
          <div className="v2-problems-rail" role="tablist" aria-label="Common blockers">
            {problems.map((item, i) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className={i === active ? "active" : ""}
                onKeyDown={(e) => onKeyDown(e, i)}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <em aria-hidden="true">{num(i)}</em>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
          <div className="v2-problems-panel" role="tabpanel" aria-live="polite">
            <span className="v2-ghost-num" aria-hidden="true">
              {num(active)}
            </span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
            <p className="v2-problems-cost">
              <span>The cost</span>
              {p.consequence}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- 3 · industry system */

function System({ industry }: { industry: Industry }) {
  const stages = industry.systemStages ?? [];
  const { active, setActive, onKeyDown } = useRoving(Math.max(stages.length, 1));
  if (stages.length === 0) return null;
  const s = stages[Math.min(active, stages.length - 1)]!;
  return (
    <section className="v2-system">
      <Container size="wide">
        <div className="v2-head light">
          <p className="v2-eyebrow">
            <span /> The HQ360 {industry.shortName.toLowerCase()} system
          </p>
          <h2>How growth actually works here.</h2>
          <p>
            One connected loop. Select a stage to see what happens, what we do, and why it matters.
          </p>
        </div>
        <div
          className="v2-system-layout"
          style={
            { "--progress": `${((active + 1) / stages.length) * 100}%` } as Record<string, string>
          }
        >
          <div className="v2-system-rail" role="tablist" aria-label="Growth stages">
            {stages.map((stage, i) => (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className={i === active ? "active" : ""}
                onKeyDown={(e) => onKeyDown(e, i)}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <em>{num(i)}</em>
                {stage.label}
              </button>
            ))}
          </div>
          <div className="v2-system-panel" role="tabpanel" aria-live="polite">
            <p className="v2-system-kicker">
              Stage {num(active)} / {num(stages.length - 1)}
            </p>
            <h3>{s.label}</h3>
            <dl className="v2-system-facets">
              <div>
                <dt>What happens</dt>
                <dd>{s.whatHappens}</dd>
              </div>
              <div>
                <dt>What HQ360 does</dt>
                <dd>{s.whatHQ360Does}</dd>
              </div>
              <div>
                <dt>Why it matters</dt>
                <dd>{s.whyItMatters}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------- 4 · service explorer */

function Services({ industry }: { industry: Industry }) {
  const cats = industry.serviceExplorer ?? [];
  const { active, setActive, onKeyDown } = useRoving(Math.max(cats.length, 1));
  if (cats.length === 0) return null;
  const c = cats[Math.min(active, cats.length - 1)]!;
  return (
    <section className="v2-services">
      <Container size="wide">
        <div className="v2-head">
          <p className="v2-eyebrow">
            <span /> What you can hire HQ360 for
          </p>
          <h2>The service explorer.</h2>
          <p>
            Everything below is scoped from the audit — you start with what moves the constraint,
            not all of it.
          </p>
        </div>
        <div className="v2-services-layout">
          <div className="v2-services-rail" role="tablist" aria-label="Service categories">
            {cats.map((cat, i) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className={i === active ? "active" : ""}
                onKeyDown={(e) => onKeyDown(e, i)}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span>{cat.name}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="v2-services-panel" role="tabpanel" aria-live="polite">
            <p className="v2-services-outcome">{c.outcome}</p>
            <p className="v2-services-desc">{c.description}</p>
            <ul className="v2-services-caps">
              {c.capabilities.map((cap) => (
                <li key={cap}>{cap}</li>
              ))}
            </ul>
            <p className="v2-services-help">
              <span>How this helps</span>
              {c.howItHelps}
            </p>
            <button type="button" className="v2-text-link" onClick={scrollToStart}>
              Talk to HQ360 about this <ArrowUpRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- 5 · proof */

function Proof({ industry }: { industry: Industry }) {
  const project = industry.proof?.find((p) => p.slug)?.slug;
  const study = project ? getCaseStudy(project) : undefined;
  return (
    <section className="v2-proof">
      <Container size="wide">
        <div className="v2-head">
          <p className="v2-eyebrow">
            <span /> Proof
          </p>
          <h2>{study ? "A project, start to finish." : "Selected work."}</h2>
        </div>

        {study ? (
          <div className="v2-case">
            <div className="v2-case-body">
              <div>
                <h3>The challenge</h3>
                <p>{study.challenge}</p>
              </div>
              <div>
                <h3>What HQ360 built</h3>
                <ul>
                  {study.approach.map((a) => (
                    <li key={a}>
                      <Check aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Outcome</h3>
                <p>{study.outcome}</p>
              </div>
            </div>
            <aside className="v2-case-side">
              {study.metrics && study.metrics.length > 0 ? (
                <ul className="v2-case-metrics">
                  {study.metrics.map((m) => (
                    <li key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="v2-case-client">{study.client}</p>
              <Link to="/work/$slug" params={{ slug: study.slug }} className="v2-text-link">
                View the full project <ArrowUpRight aria-hidden="true" />
              </Link>
            </aside>
          </div>
        ) : (
          <p className="v2-proof-empty">
            Recent {industry.shortName.toLowerCase()} work is on the{" "}
            <Link to="/work">work page</Link>. Verified case studies for this vertical are added
            here as they publish — nothing on this page is illustrative.
          </p>
        )}

        <div className="v2-proof-strip">
          <PortfolioStrip industry={industry.slug} eyebrow="From the studio" title="Recent work" />
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------- 6 · smart diagnostic */

function Diagnostic({
  industry,
  onRecommend,
}: {
  industry: Industry;
  onRecommend: (o: DiagOption | null) => void;
}) {
  const diag = industry.diagnostic;
  const [picked, setPicked] = useState<string | null>(null);

  useEffect(() => {
    if (!diag || typeof window === "undefined") return;
    const focus = new URLSearchParams(window.location.search).get("focus");
    const match = focus && diag.options.find((o) => o.id === focus);
    if (match) {
      setPicked(match.id);
      onRecommend(match);
    }
    // Run once on mount for scouting deep-links.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!diag) return null;
  const result = diag.options.find((o) => o.id === picked) ?? null;

  function choose(o: DiagOption) {
    setPicked(o.id);
    onRecommend(o);
  }

  return (
    <section className="v2-diag">
      <Container size="wide">
        <div className="v2-head light">
          <p className="v2-eyebrow">
            <span /> Guided self-diagnosis
          </p>
          <h2>{diag.question}</h2>
          <p>
            Pick the closest fit. This is a guided read from your answer — not a technical audit of
            your site.
          </p>
        </div>
        <div className="v2-diag-layout">
          <div className="v2-diag-options" role="radiogroup" aria-label={diag.question}>
            {diag.options.map((o) => (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={picked === o.id}
                className={picked === o.id ? "active" : ""}
                onClick={() => choose(o)}
              >
                <span className="v2-diag-dot" aria-hidden="true" />
                {o.label}
              </button>
            ))}
          </div>
          <div className="v2-diag-result" aria-live="polite">
            {result ? (
              <>
                <p className="v2-diag-verdict">{result.recommendation}</p>
                <dl>
                  <div>
                    <dt>Recommended starting point</dt>
                    <dd>{result.service}</dd>
                  </div>
                  <div>
                    <dt>What HQ360 would review</dt>
                    <dd>{result.review}</dd>
                  </div>
                </dl>
                <button type="button" className="v2-btn v2-btn-primary" onClick={scrollToStart}>
                  Discuss this with HQ360 <ArrowUpRight aria-hidden="true" />
                </button>
              </>
            ) : (
              <p className="v2-diag-placeholder">
                Your recommendation appears here — the likely bottleneck, where we&rsquo;d start,
                and what we&rsquo;d look at first.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ faq */

function Faq({ industry }: { industry: Industry }) {
  return (
    <section className="v2-faq">
      <Container size="wide">
        <div className="v2-faq-layout">
          <div className="v2-head">
            <p className="v2-eyebrow">
              <span /> Questions
            </p>
            <h2>{industry.shortName}, answered.</h2>
          </div>
          <FaqSection faqs={industry.faqs.slice(0, 6)} idPrefix={`v2-${industry.slug}`} />
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- 7 · final cta */

function FinalCta({
  industry,
  prefill,
  rec,
}: {
  industry: Industry;
  prefill?: string | undefined;
  rec: DiagOption | null;
}) {
  const line = industry.finalCta?.line ?? industry.cta.label;
  return (
    <section id="start" className="v2-final">
      <div className="v2-final-rings" aria-hidden="true">
        <span />
        <span />
      </div>
      <Container size="wide" className="relative z-10">
        <div className="v2-final-layout">
          <div>
            <p className="v2-eyebrow">
              <span /> Start here
            </p>
            <h2>{line}</h2>
            {rec ? (
              <p className="v2-final-rec">
                Based on your answer, start with <strong>{rec.service}</strong>.
              </p>
            ) : null}
            <ul className="v2-final-points">
              <li>We reply within one working day</li>
              <li>You own every account and asset we build</li>
              <li>Month-to-month on ongoing work, 30 days&rsquo; notice</li>
            </ul>
          </div>
          <ProjectInquiryForm
            defaultIndustry={industry.shortName}
            sourceIndustry={industry.shortName}
            prefillMessage={prefill}
          />
        </div>
        <p className="v2-final-explore">
          <Link to="/industries">
            Explore another industry <ArrowRight aria-hidden="true" />
          </Link>
        </p>
      </Container>
    </section>
  );
}
