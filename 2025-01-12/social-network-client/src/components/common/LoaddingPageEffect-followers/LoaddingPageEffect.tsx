import './LoaddingPageEffect.css'

const FollowSkeleton = () => {
  return (
    <div className="skeleton-container">
      {/* Title skeleton */}
      <div className="skeleton-title"></div>
      
      {/* Items */}
      {[...Array(5)].map((_, index) => (
        <div key={index} className="skeleton-item">
          {/* Avatar */}
          <div className="skeleton-avatar"></div>
          
          {/* Content */}
          <div className="skeleton-content">
            <div className="skeleton-text"></div>
            <div className="skeleton-text small"></div>
          </div>
          
          {/* Button */}
          <div className="skeleton-button"></div>
        </div>
      ))}
    </div>
  );
};

export default FollowSkeleton;