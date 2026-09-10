import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/Primitives";
import { LAUNCH } from "@/data/launch";
import "./launch-film.css";

/**
 * The cover-reveal film from Sanman Thapa's launch. Autoplays muted + looped
 * while in view, pauses off-screen / when the tab is hidden, and stays a
 * poster + play button under reduced motion or data-saver.
 */
export function LaunchFilm() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [armed, setArmed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video || typeof IntersectionObserver === "undefined") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const autoAllowed = !reduced && !nav.connection?.saveData;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setArmed(true);
          if (autoAllowed && !manual) {
            video
              .play()
              .then(() => setPlaying(true))
              .catch(() => setPlaying(false));
          }
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    );
    observer.observe(section);
    const onVisibility = () => {
      if (document.hidden) video.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [manual]);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    setManual(true);
    setArmed(true);
    if (video.paused) {
      video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section ref={sectionRef} className="launch-film">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="launch-film-layout">
          <div className="launch-film-copy">
            <Eyebrow tone="light">Made in-house</Eyebrow>
            <h2>
              The cover reveal film, <em>made end to end.</em>
            </h2>
            <div className="rule-brand launch-film-rule" />
            <p>
              Concept, edit and score for <i>{LAUNCH.book}</i> — produced by HQ360 as part of the
              launch, not bolted on after it.
            </p>
            <div className="launch-film-links">
              <Link to="/book-launch" className="launch-film-link">
                See the full launch <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link
                to="/work/$slug"
                params={{ slug: "sanman-thapa-book-launch" }}
                className="launch-film-link"
              >
                Read the project <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="launch-film-frame" data-playing={playing || undefined}>
            <video
              ref={videoRef}
              className="launch-film-video"
              poster="/media/motion-poster.jpg"
              muted
              loop
              playsInline
              preload="none"
              src={armed ? LAUNCH.video.src : undefined}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />
            <button
              type="button"
              className="launch-film-toggle"
              onClick={toggle}
              aria-pressed={playing}
              aria-label={playing ? "Pause the film" : "Play the film"}
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </button>
            <span className="launch-film-glow" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
