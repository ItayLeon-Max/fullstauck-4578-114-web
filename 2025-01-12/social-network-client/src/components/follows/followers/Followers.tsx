import './Followers.css';
import { useEffect, useState } from 'react';
import followersService from '../../../services/followers';
import Follow from '../follow/Follow';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { initFollowers } from '../../../redux/followersSlice';
import FollowSkeleton from '../../common/LoaddingPageEffect-followers/LoaddingPageEffect';

export default function Followers() {
    const dispatch = useAppDispatch();
    const followers = useAppSelector(state => state.followers.followers);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        followersService.getFollowers()
            .then(followers => {
                dispatch(initFollowers(followers));
                // קצת דיליי מלאכותי כדי שנראה את אפקט הטעינה
                setTimeout(() => setIsLoading(false), 1000);
            })
            .catch(error => {
                alert(error);
                setIsLoading(false);
            });
    }, [dispatch]);

    if (isLoading) {
        return <div className="Followers"><FollowSkeleton /></div>;
    }

    return (
        <div className="Followers">
            <h2>Followers</h2>
            {followers.map(user => (
                <Follow
                    key={user.id}
                    user={user}
                />
            ))}
        </div>
    );
}