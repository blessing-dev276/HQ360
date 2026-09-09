import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, RotateCcw, Sparkles } from "lucide-react";
import { INDUSTRIES } from "@/data/industries";
import { CASE_STUDIES } from "@/data/work";
import { CTAS } from "@/config/brand";
import { Container } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { ProofSkeleton } from "./HomeSkeletons";
import {
  DIAGNOSTIC_GOALS,
  DIAGNOSTIC_INDUSTRIES,
  diagnose,
  HOME_CAPABILITIES,
  HOME_INDUSTRIES,
  HQ360_SYSTEM,
  SYSTEM_POINT,
} from "./home-content";
import "./home.css";

const LazyFeaturedProof = lazy(() =>
  import("./FeaturedProof").then((m) => ({ default: m.FeaturedProof })),
);

function SmartLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} preload="intent" className={className}>
      {children}
    </Link>
  );
}

/** Arrow-key roving for a vertical/tab list. */
function rove(event: KeyboardEvent, index: number, count: number, apply: (next: number) => void) {
  let next = index;
  if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % count;
  else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + count) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;
  event.preventDefault();
  apply(next);
}

export function HomeExperience() {
  return (
    <div className="home-experience">
      <Hero />
      <IndustriesExplorer />
      <CapabilitiesExplorer />
      <SystemSection />
      <FeaturedWork />
      <SmartDiagnostic />
      <FinalCta />
    </div>
  );
}

/* ============================================================ 1 · HERO === */

function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    visualRef.current?.style.setProperty(
      "--orbit-x",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 10}px`,
    );
    visualRef.current?.style.setProperty(
      "--orbit-y",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * 10}px`,
    );
  }
  function resetPointer() {
    visualRef.current?.style.setProperty("--orbit-x", "0px");
    visualRef.current?.style.setProperty("--orbit-y", "0px");
  }

  return (
    <section className="home-hero">
      <div className="home-hero-grid" aria-hidden="true" />
      <Container size="wide" className="relative z-10">
        <div className="home-hero-layout">
          <div className="home-hero-copy">
            <p className="home-eyebrow">
              <span /> Strategy · Creative · Technology · Growth
            </p>
            <h1>
              Everything your business needs to grow. <em>Connected.</em>
            </h1>
            <p className="home-hero-lede">
              HQ360 brings strategy, creative, websites, marketing and automation together into one
              connected growth system — built around your industry.
            </p>
            <div className="home-actions">
              <SmartLink to={CTAS.primary.to} className="home-button home-button-primary">
                Start a Project <ArrowUpRight aria-hidden="true" />
              </SmartLink>
              <a href="#home-industries" className="home-button home-button-ghost">
                Find Your Industry <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="home-hero-context">
              <span>Worldwide</span>
              <span>USA-focused</span>
              <span>Multi-industry</span>
            </div>
          </div>

          <div
            className="home-orbit-wrap"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
          >
            <div
              ref={visualRef}
              className="home-orbit"
              role="img"
              aria-label="The HQ360 core with brand, web, SEO, marketing, automation and content connected around it"
            >
              <div className="home-orbit-ring ring-a" />
              <div className="home-orbit-ring ring-b" />
              <div className="home-orbit-ring ring-c" />
              <div className="home-orbit-core">
                <Sparkles aria-hidden="true" />
                <strong>HQ360</strong>
                <span>One growth system</span>
              </div>
              {HOME_CAPABILITIES.map((capability, index) => (
                <SmartLink
                  key={capability.slug}
                  to={capability.path}
                  className={`home-orbit-node node-${index + 1}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {capability.short}
                </SmartLink>
              ))}
              <span className="home-orbit-spark" aria-hidden="true" />
            </div>
          </div>
        </div>

        <a className="home-scroll-cue" href="#home-industries">
          <ArrowDown aria-hidden="true" /> Is HQ360 for a business like yours?
        </a>
      </Container>
    </section>
  );
}

/* ====================================================== 2 · INDUSTRIES === */

function IndustriesExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const industry = HOME_INDUSTRIES[active]!;

  return (
    <section id="home-industries" className="home-industries">
      <Container size="wide">
        <Reveal>
          <div className="home-section-intro">
            <p className="home-eyebrow">
              <span /> Who we help
            </p>
            <h2>Different industries. Different growth problems.</h2>
            <p>
              We don't apply the same playbook to every business. Explore the HQ360 system built
              around your industry.
            </p>
          </div>
        </Reveal>

        <div className="home-industry-layout">
          <div className="home-industry-list" role="tablist" aria-label="Featured industries">
            {HOME_INDUSTRIES.map((item, index) => (
              <button
                key={item.slug}
                ref={(el) => {
                  tabs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`home-industry-tab-${index}`}
                aria-selected={index === active}
                aria-controls="home-industry-panel"
                tabIndex={index === active ? 0 : -1}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onKeyDown={(e) =>
                  rove(e, index, HOME_INDUSTRIES.length, (n) => {
                    setActive(n);
                    tabs.current[n]?.focus();
                  })
                }
              >
                <span>{item.label}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            ))}
            <SmartLink to="/industries" className="home-industry-all">
              View all {INDUSTRIES.length} industries <ArrowUpRight aria-hidden="true" />
            </SmartLink>
          </div>

          <div
            className="home-industry-panel"
            id="home-industry-panel"
            role="tabpanel"
            aria-labelledby={`home-industry-tab-${active}`}
            aria-live="polite"
          >
            <p className="home-detail-label">{industry.category}</p>
            <h3>{industry.label}</h3>
            <ol className="home-flow" aria-label={`${industry.label} growth path`}>
              {industry.flow.map((node, index) => (
                <li key={node}>
                  <span>{node}</span>
                  {index < industry.flow.length - 1 ? <ArrowRight aria-hidden="true" /> : null}
                </li>
              ))}
            </ol>
            <p className="home-industry-outcome">{industry.outcome}</p>
            <SmartLink to={industry.path} className="home-button home-button-dark">
              Explore {industry.label} <ArrowRight aria-hidden="true" />
            </SmartLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ==================================================== 3 · CAPABILITIES === */

function CapabilitiesExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const capability = HOME_CAPABILITIES[active]!;

  return (
    <section className="home-capabilities">
      <Container size="wide">
        <Reveal>
          <div className="home-section-intro light">
            <p className="home-eyebrow">
              <span /> What we do
            </p>
            <h2>One connected set of capabilities.</h2>
            <p>
              The whole system, or the part you need right now. Detailed deliverables live on each
              service page.
            </p>
          </div>
        </Reveal>

        <div className="home-capability-layout">
          <div className="home-capability-list" role="tablist" aria-label="HQ360 capabilities">
            {HOME_CAPABILITIES.map((item, index) => (
              <button
                key={item.slug}
                ref={(el) => {
                  tabs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`home-capability-tab-${index}`}
                aria-selected={index === active}
                aria-controls="home-capability-panel"
                tabIndex={index === active ? 0 : -1}
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onKeyDown={(e) =>
                  rove(e, index, HOME_CAPABILITIES.length, (n) => {
                    setActive(n);
                    tabs.current[n]?.focus();
                  })
                }
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.label}</strong>
                <ArrowUpRight aria-hidden="true" />
              </button>
            ))}
          </div>

          <div
            className="home-capability-panel"
            id="home-capability-panel"
            role="tabpanel"
            aria-labelledby={`home-capability-tab-${active}`}
            aria-live="polite"
          >
            <span className="home-capability-index">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(HOME_CAPABILITIES.length).padStart(2, "0")}
            </span>
            <h3>{capability.outcome}</h3>
            <ul>
              {capability.items.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <SmartLink to={capability.path} className="home-text-link">
              Explore {capability.label} <ArrowRight aria-hidden="true" />
            </SmartLink>
          </div>
        </div>

        <p className="home-capability-footer">
          <SmartLink to="/services" className="home-text-link">
            See all services <ArrowUpRight aria-hidden="true" />
          </SmartLink>
        </p>
      </Container>
    </section>
  );
}

/* ================================================= 4 · THE HQ360 SYSTEM === */

function SystemSection() {
  const [active, setActive] = useState(0);
  const count = HQ360_SYSTEM.length;
  const stage = HQ360_SYSTEM[active] ?? HQ360_SYSTEM[0]!;

  return (
    <section className="home-system-section">
      <Container size="wide">
        <Reveal>
          <div className="home-section-intro light">
            <p className="home-eyebrow">
              <span /> The 360 system
            </p>
            <h2>How the pieces connect.</h2>
            <p>Six stages, one loop. Each one feeds the next. Select a stage to see its role.</p>
          </div>
        </Reveal>

        <div className="home-system">
          <div
            className="home-system-orbit"
            role="tablist"
            aria-label="The six stages of the HQ360 system"
          >
            <div className="home-system-orbit-ring" aria-hidden="true" />
            <div className="home-system-core" aria-hidden="true">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <strong>{stage.title}</strong>
            </div>
            {HQ360_SYSTEM.map((item, index) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={index === active}
                tabIndex={index === active ? 0 : -1}
                className={`home-system-stage stage-${index + 1} ${index === active ? "active" : ""}`}
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onKeyDown={(e) => rove(e, index, count, setActive)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.title}
              </button>
            ))}
          </div>

          <div className="home-system-detail" aria-live="polite">
            <p className="home-detail-label">
              Stage {active + 1} of {count}
            </p>
            <h3>{stage.title}</h3>
            <p>{stage.blurb}</p>
            <p className="home-system-capabilities">{stage.capabilities}</p>
          </div>

          {/* Mobile: connected vertical sequence, each stage an accordion. */}
          <ul className="home-system-list">
            {HQ360_SYSTEM.map((item, index) => (
              <li key={item.key} className={index === active ? "active" : ""}>
                <button
                  type="button"
                  aria-expanded={index === active}
                  onClick={() => setActive(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.title}
                </button>
                {index === active ? (
                  <div>
                    <p>{item.blurb}</p>
                    <p className="home-system-capabilities">{item.capabilities}</p>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <p className="home-system-point">{SYSTEM_POINT}</p>
        </Reveal>
      </Container>
    </section>
  );
}

/* =================================================== 5 · FEATURED WORK === */

function FeaturedWork() {
  const [near, setNear] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const verified = CASE_STUDIES.find((study) => study.status === "verified");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="home-work">
      <Container size="wide">
        <div className="home-work-heading">
          <div>
            <p className="home-eyebrow">
              <span /> Proof of work
            </p>
            <h2>Real work. Real clients. No invented numbers.</h2>
          </div>
          <SmartLink to={verified ? `/work/${verified.slug}` : "/work"} className="home-text-link">
            Explore Our Work <ArrowUpRight aria-hidden="true" />
          </SmartLink>
        </div>
        {near ? (
          <Suspense fallback={<ProofSkeleton />}>
            <LazyFeaturedProof />
          </Suspense>
        ) : (
          <ProofSkeleton />
        )}
      </Container>
    </section>
  );
}

/* ================================================= 6 · SMART DIAGNOSTIC === */

function SmartDiagnostic() {
  const [goal, setGoal] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);
  const result = goal && industry ? diagnose(goal, industry) : null;

  return (
    <section className="home-diagnostic">
      <Container size="wide">
        <Reveal>
          <div className="home-section-intro">
            <p className="home-eyebrow">
              <span /> Where to start
            </p>
            <h2>Not sure what your business actually needs?</h2>
            <p>
              Start with the problem. We'll point you toward the part of the system that may matter
              most. This is guided self-diagnosis, not automated consulting.
            </p>
          </div>
        </Reveal>

        <div className="home-diagnostic-flow">
          <fieldset className="home-diagnostic-step">
            <legend>
              <span className="home-diagnostic-step-n">01</span> What are you trying to improve?
            </legend>
            <div className="home-diagnostic-options" role="radiogroup" aria-label="Your goal">
              {DIAGNOSTIC_GOALS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={goal === option.id}
                  className={goal === option.id ? "active" : ""}
                  onClick={() => setGoal(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="home-diagnostic-step" data-locked={goal ? undefined : true}>
            <legend>
              <span className="home-diagnostic-step-n">02</span> What kind of business are you?
            </legend>
            <div className="home-diagnostic-options" role="radiogroup" aria-label="Your business">
              {DIAGNOSTIC_INDUSTRIES.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  role="radio"
                  aria-checked={industry === option.id}
                  disabled={!goal}
                  className={industry === option.id ? "active" : ""}
                  onClick={() => setIndustry(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="home-diagnostic-result" aria-live="polite">
            {result ? (
              <div className="home-diagnostic-card">
                <p className="home-detail-label">Your likely starting point</p>
                <h3>{result.title}</h3>
                <p>{result.copy}</p>
                <div className="home-diagnostic-actions">
                  <Link
                    to="/contact"
                    search={result.contactSearch}
                    preload="intent"
                    className="home-button home-button-primary"
                  >
                    {result.ctaLabel} <ArrowUpRight aria-hidden="true" />
                  </Link>
                  {result.capabilityPath && result.capabilityLabel ? (
                    <SmartLink to={result.capabilityPath} className="home-button home-button-ghost">
                      {result.capabilityLabel} <ArrowRight aria-hidden="true" />
                    </SmartLink>
                  ) : null}
                </div>
                <button
                  type="button"
                  className="home-diagnostic-reset"
                  onClick={() => {
                    setGoal(null);
                    setIndustry(null);
                  }}
                >
                  <RotateCcw size={14} aria-hidden="true" /> Start over
                </button>
              </div>
            ) : (
              <p className="home-diagnostic-hint">
                {goal
                  ? "Pick your business type to see a starting point."
                  : "Pick a goal to begin."}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================================================== 7 · FINAL CTA === */

function FinalCta() {
  return (
    <section className="home-closing">
      <div className="home-closing-rings" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Container size="wide" className="relative z-10">
        <p className="home-eyebrow">
          <span /> Your next move
        </p>
        <h2>Your growth shouldn't depend on disconnected pieces.</h2>
        <p>
          Tell us where you're trying to go. We'll help identify what needs to connect to get you
          there.
        </p>
        <div className="home-actions">
          <SmartLink to={CTAS.primary.to} className="home-button home-button-orange">
            Start a Project <ArrowUpRight aria-hidden="true" />
          </SmartLink>
          <SmartLink to="/industries" className="home-button home-button-dark-ghost">
            Find Your Industry <ArrowRight aria-hidden="true" />
          </SmartLink>
        </div>
      </Container>
    </section>
  );
}
