import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CAPABILITIES, getCapability, type Capability } from "@/data/capabilities";
import { INDUSTRIES } from "@/data/industries";
import { Container } from "@/components/site/Primitives";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { FaqSection } from "@/components/site/FaqSection";
import { PortfolioStrip } from "@/components/site/PortfolioStrip";
import { useReveal } from "@/hooks/use-reveal";
import { capabilityHead } from "@/lib/page-heads";
import { buildSeo } from "@/lib/seo";
import { CTAS } from "@/config/brand";
import "@/components/site/industry-v2.css";
import "@/components/site/capability.css";

const num = (i: number) => String(i + 1).padStart(2, "0");
const vars = (o: Record<string, string | number>) => o as CSSProperties;
const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function RevealSection({ className, children }: { className: string; children: ReactNode }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section ref={ref} className={className} data-inview={visible || undefined}>
      {children}
    </section>
  );
}

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

export const Route = createFileRoute("/capabilities/$slug")({
  loader: ({ params }): { capability: Capability } => {
    const capability = getCapability(params.slug);
    if (!capability) throw notFound();
    return { capability };
  },
  head: ({ loaderData }) =>
    loaderData
      ? capabilityHead(loaderData.capability)
      : buildSeo({
          title: "Service not found | HQ360",
          description: "This service could not be found.",
          path: "/capabilities",
          noindex: true,
        }),
  component: CapabilityDetail,
});

function CapabilityDetail() {
  const { capability } = Route.useLoaderData();
  const others = CAPABILITIES.filter((c) => c.slug !== capability.slug);
  const relatedIndustries = INDUSTRIES.filter((i) =>
    i.recommendedCapabilities.includes(capability.slug),
  ).slice(0, 5);

  return (
    <div className="indv2 capd" data-motif="commerce">
      <Hero capability={capability} />
      <Outcomes capability={capability} />
      <ServiceExplorer capability={capability} />
      {relatedIndustries.length > 0 ? (
        <RevealSection className="v2-faq capd-industries">
          <Container size="wide">
            <div className="v2-head">
              <p className="v2-eyebrow">
                <span /> Where it applies
              </p>
              <h2>Industries that lean on this.</h2>
            </div>
            <ul className="capd-chips">
              {relatedIndustries.map((i, n) => (
                <li key={i.slug} style={vars({ "--i": n })}>
                  <Link to={i.path}>
                    {i.shortName} <ArrowUpRight aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </RevealSection>
      ) : null}

      <div className="capd-strip">
        <PortfolioStrip
          capability={capability.slug}
          eyebrow="Selected work"
          title="Work in this area"
        />
      </div>

      <RevealSection className="v2-services capd-process">
        <Container size="wide">
          <div className="v2-head">
            <p className="v2-eyebrow">
              <span /> How we run it
            </p>
            <h2>The same six steps, every engagement.</h2>
          </div>
          <div className="capd-process-inner">
            <ProcessTimeline />
          </div>
        </Container>
      </RevealSection>

      {capability.faqs.length > 0 ? (
        <RevealSection className="v2-faq">
          <Container size="wide">
            <div className="v2-faq-layout">
              <div className="v2-head">
                <p className="v2-eyebrow">
                  <span /> Questions
                </p>
                <h2>{capability.name}, answered.</h2>
              </div>
              <FaqSection faqs={capability.faqs} idPrefix={`cap-${capability.slug}`} />
            </div>
          </Container>
        </RevealSection>
      ) : null}

      <FinalCta capability={capability} others={others} />
    </div>
  );
}

/* -------------------------------------------------------------- hero */

function Hero({ capability }: { capability: Capability }) {
  const orbRef = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse" || reducedMotion()) return;
    const b = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - b.left) / b.width - 0.5) * 26;
    const y = ((e.clientY - b.top) / b.height - 0.5) * 26;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      orbRef.current?.style.setProperty("--px", `${x}px`);
      orbRef.current?.style.setProperty("--py", `${y}px`);
    });
  }
  function reset() {
    cancelAnimationFrame(raf.current);
    orbRef.current?.style.setProperty("--px", "0px");
    orbRef.current?.style.setProperty("--py", "0px");
  }
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <section className="v2-hero" data-anim onPointerMove={onMove} onPointerLeave={reset}>
      <div ref={orbRef} className="v2-hero-orb" aria-hidden="true">
        <span />
        <span />
        <i />
      </div>
      <Container size="wide" className="relative z-10">
        <nav aria-label="Breadcrumb" className="v2-crumb">
          <Link to="/capabilities">Services</Link>
          <span aria-hidden="true">/</span>
          <span>{capability.name}</span>
        </nav>
        <div className="v2-hero-copy">
          <p className="v2-eyebrow">
            <span /> Service
          </p>
          <h1>{capability.name}</h1>
          <p className="v2-hero-lede">{capability.tagline}</p>
          <p className="capd-summary">{capability.summary}</p>
          <div className="v2-actions">
            <Link to={CTAS.primary.to} className="v2-btn v2-btn-primary">
              {CTAS.primary.label} <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link to="/work" className="v2-btn v2-btn-ghost">
              See the work <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <ol className="v2-hero-track" aria-label={`Inside ${capability.name}`}>
          {capability.services.slice(0, 6).map((s, i) => (
            <li key={s.title} style={vars({ "--i": i })}>
              <span className="v2-hero-node">
                <em>{num(i)}</em>
                {s.title}
              </span>
              {i < Math.min(capability.services.length, 6) - 1 ? (
                <ArrowRight className="v2-hero-track-arrow" aria-hidden="true" />
              ) : null}
            </li>
          ))}
          <span className="v2-hero-spark" aria-hidden="true" />
        </ol>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- outcomes */

function Outcomes({ capability }: { capability: Capability }) {
  return (
    <RevealSection className="v2-problems capd-outcomes">
      <Container size="wide">
        <p className="v2-eyebrow">
          <span /> What you get
        </p>
        <h2 className="capd-outcomes-h">Outcomes, not tools.</h2>
        <ol className="capd-outcome-list">
          {capability.outcomes.map((o, i) => (
            <li key={o} style={vars({ "--i": i })}>
              <span aria-hidden="true">{num(i)}</span>
              {o}
            </li>
          ))}
        </ol>
      </Container>
    </RevealSection>
  );
}

/* -------------------------------------------------- service explorer */

function ServiceExplorer({ capability }: { capability: Capability }) {
  const list = capability.services;
  const { active, setActive, onKeyDown } = useRoving(Math.max(list.length, 1));
  const s = list[Math.min(active, list.length - 1)]!;
  return (
    <RevealSection className="v2-services">
      <Container size="wide">
        <div className="v2-head">
          <p className="v2-eyebrow">
            <span /> The work
          </p>
          <h2>Inside {capability.name}.</h2>
          <p>Pick a piece to see what it covers. Scope is set once we see what you already run.</p>
        </div>
        <div className="v2-services-layout">
          <div
            className="v2-services-rail"
            role="tablist"
            aria-label={`${capability.name} services`}
          >
            {list.map((svc, i) => (
              <button
                key={svc.title}
                type="button"
                role="tab"
                style={vars({ "--i": i })}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className={i === active ? "active" : ""}
                onKeyDown={(e) => onKeyDown(e, i)}
                onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span>{svc.title}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="v2-services-panel" role="tabpanel" aria-live="polite">
            <div className="v2-swap" key={active}>
              <p className="v2-services-outcome">{s.title}</p>
              <p className="v2-services-desc">{s.body}</p>
            </div>
          </div>
        </div>

        <div className="capd-deliverables">
          <p>Typical deliverables</p>
          <ul>
            {capability.deliverables.map((d, i) => (
              <li key={d} style={vars({ "--i": i })}>
                <span aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </RevealSection>
  );
}

/* ------------------------------------------------------- final cta */

function FinalCta({ capability, others }: { capability: Capability; others: Capability[] }) {
  return (
    <section id="start" className="v2-final">
      <div className="v2-final-rings" aria-hidden="true">
        <span />
        <span />
      </div>
      <Container size="wide" className="relative z-10">
        <div className="v2-head light">
          <p className="v2-eyebrow">
            <span /> Bring it into the system
          </p>
          <h2>{capability.name} works best connected to the rest.</h2>
          <p>
            Tell us what&rsquo;s in place today. We&rsquo;ll show you how this fits the whole system
            and what to build first.
          </p>
        </div>
        <div className="v2-actions capd-final-actions">
          <Link to={CTAS.primary.to} className="v2-btn v2-btn-primary">
            {CTAS.primary.label} <ArrowUpRight aria-hidden="true" />
          </Link>
          <Link to={CTAS.industries.to} className="v2-btn v2-btn-ghost capd-ghost-light">
            {CTAS.industries.label} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <ul className="capd-more">
          {others.map((c, i) => (
            <li key={c.slug} style={vars({ "--i": i })}>
              <Link to={c.path}>
                <strong>{c.name}</strong>
                <span>{c.tagline}</span>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
