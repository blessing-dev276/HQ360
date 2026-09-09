export function ProofSkeleton() {
  return (
    <div className="home-proof-skeleton" aria-label="Loading client proof" role="status">
      <div className="skeleton-media hq-skeleton" />
      <div className="skeleton-copy">
        <span className="hq-skeleton skeleton-kicker" />
        <span className="hq-skeleton skeleton-title" />
        <span className="hq-skeleton skeleton-line" />
        <span className="hq-skeleton skeleton-line short" />
        <div className="skeleton-actions">
          <span className="hq-skeleton skeleton-pill" />
          <span className="hq-skeleton skeleton-pill" />
        </div>
      </div>
    </div>
  );
}
