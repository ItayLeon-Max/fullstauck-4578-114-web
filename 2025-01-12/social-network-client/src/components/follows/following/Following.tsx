import './Following.css';
import { useEffect, useState } from 'react';
import User from '../../../models/user/User';
import following from '../../../services/following';
import Follow from '../follow/Follow';

export default function Following() {
    const [followingList, setFollowingList] = useState<User[]>([]);

    useEffect(() => {
        following.getFollowing()
            .then(setFollowingList)
            .catch(alert);
    }, []);

    async function handleUnfollow(userId: string) {
        try {
            await following.unFollow(userId);
            setFollowingList(prev => prev.filter(user => user.id !== userId));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            alert('Failed to unfollow user');
        }
    }

    return (
        <div className="Following">
            <h2>Following</h2>
            {followingList.map(user => (
                <Follow
                    key={user.id}
                    user={user}
                    isFollowing={true}
                    onToggleFollow={() => handleUnfollow(user.id)}
                />
            ))}
        </div>
    );
}