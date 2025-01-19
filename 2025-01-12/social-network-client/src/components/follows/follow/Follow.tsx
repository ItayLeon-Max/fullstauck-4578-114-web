import './Follow.css';
import User from '../../../models/user/User';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { updateFollowStatus } from '../../../redux/followingSlice';
import { removeFollower, addFollower } from '../../../redux/followersSlice';
import followingService from '../../../services/following';


interface FollowProps {
    user: User;
}

export default function Follow({ user }: FollowProps) {
    const { id, name } = user;
    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();
    const isFollowing = useAppSelector(state => 
        state.following.following.some(f => f.id === id)
    );

    async function handleToggleFollow() {
        if (isFollowing && !window.confirm(`Are you sure you want to stop following ${name}?`)) {
            return;
        }

        setLoading(true);
        try {
            if (isFollowing) {
                // Unfollow
                await followingService.unFollow(id);
                
                // עדכון סטייט קליינט צד
                dispatch(updateFollowStatus({ userId: id, isFollowing: false }));
                dispatch(removeFollower(id));
            } else {
                // Follow
                await followingService.follow(id);
                
                // עדכון סטייט קליינט צד
                dispatch(updateFollowStatus({ userId: id, isFollowing: true }));
                dispatch(addFollower({ ...user }));
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to toggle follow status');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="Follow">
            <div className="user-avatar">
                <span className="user-icon">👤</span>
            </div>
            <div className="user-info">
                <span className="user-name">{name}</span>
                <span className="user-email">{user.email}</span>
            </div>
            <button
                className={`follow-toggle-button ${isFollowing ? 'unfollow' : ''}`}
                onClick={handleToggleFollow}
                disabled={loading}
            >
                {loading ? 
                    (isFollowing ? 'Unfollowing...' : 'Following...') : 
                    (isFollowing ? 'Unfollow' : 'Follow')
                }
            </button>
        </div>
    );
}