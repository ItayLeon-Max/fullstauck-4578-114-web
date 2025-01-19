import './LoaddingPageForProfile.css'

const PostsSkeleton = () => {
  return (
    <div className="posts-skeleton-container">
      <div className="posts-skeleton-new-post">
        <div className="posts-skeleton-new-post-title"></div>
        <div className="posts-skeleton-new-post-input"></div>
        <div className="posts-skeleton-new-post-input"></div>
        <div className="posts-skeleton-new-post-button"></div>
      </div>
      
      {[...Array(3)].map((_, index) => (
        <div key={index} className="posts-skeleton-post">
          <div className="posts-skeleton-post-header">
            <div className="posts-skeleton-post-title"></div>
            <div className="posts-skeleton-post-subtitle"></div>
          </div>
          <div className="posts-skeleton-post-body"></div>
          <div className="posts-skeleton-post-actions">
            <div className="posts-skeleton-action-button"></div>
            <div className="posts-skeleton-action-button"></div>
            <div className="posts-skeleton-action-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsSkeleton;