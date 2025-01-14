import './Followers.css';
import { useEffect, useState } from 'react';
import User from '../../../models/user/User';
import followers from '../../../services/followers';
import Follow from '../follow/Follow';

export default function Followers() {
    const [followersList, setFollowersList] = useState<User[]>([]);
    const [followingList, setFollowingList] = useState<User[]>([]);

    useEffect(() => {
        followers.getFollowers()
            .then(setFollowersList)
            .catch(alert);
    }, []);

    async function handleFollow(userId: string) {
        try {
            await followers.follow(userId);
            const user = followersList.find(f => f.id === userId);
            if (user) {
                setFollowingList(prev => [...prev, user]);
                setFollowersList(prev => prev.filter(f => f.id !== userId)); 
            }
        } catch (e) {
            alert('Failed to follow user');
        }
    }

    return (
        <div className="Followers">
            <h2>Followers</h2>
            {followersList.map(user => (
                <Follow
                    key={user.id}
                    user={user}
                    isFollowing={followingList.some(f => f.id === user.id)}
                    onToggleFollow={() => handleFollow(user.id)}
                />
            ))}
        </div>
    );
}