import './Follow.css'
import User from '../../../models/user/User'
import { useState } from 'react'

interface FollowProps {
    user: User
}

export default function Follow({ user }: FollowProps) {
    const [isFollowing, setIsFollowing] = useState(false)

    function toggleFollow() {
        setIsFollowing(!isFollowing)
    }

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
                onClick={toggleFollow}
            >
                {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
        </div>
    )
}