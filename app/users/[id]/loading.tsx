export default function Loading() {
  return (
    <main className="user-details">
      <div className="skeleton skeleton-back-link"></div>

      <div className="user-details-card">
        <div className="skeleton skeleton-user-title"></div>

        <div className="user-info">
          <div className="skeleton skeleton-user-text"></div>
          <div className="skeleton skeleton-user-text"></div>
        </div>

        <div className="user-details-actions">
          <div className="skeleton skeleton-action-button"></div>
          <div className="skeleton skeleton-action-button"></div>
        </div>
      </div>
    </main>
  );
}