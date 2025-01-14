import './Follow.css';
import User from '../../../models/user/User';

interface FollowProps {
    user: User;
    isFollowing: boolean;
    onToggleFollow: () => void;
}

export default function Follow({ user, isFollowing, onToggleFollow }: FollowProps) {
    return (
        <div className="Follow">
            <div className="user-avatar">
                <span className="user-icon">👤</span>
            </div>
            <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
            </div>
            <button
                className={`follow-toggle-button ${isFollowing ? 'unfollow' : ''}`}
                onClick={onToggleFollow}
            >
                {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    );
}