import './Followers.css';
import { useEffect, useState } from 'react';
import Follow from '../follow/Follow';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { initFollowers } from '../../../redux/followersSlice';
import FollowSkeleton from '../../common/LoaddingPageEffect-followers/LoaddingPageEffect';
import FollowersService from '../../../services/auth-aware/followers';
import useService from '../../../hooks/useService';

export default function Followers() {
    const dispatch = useAppDispatch();
    const followers = useAppSelector(state => state.followers.followers);
    const [isLoading, setIsLoading] = useState(true);

    const followersService = useService(FollowersService);

    useEffect(() => {
        followersService.getFollowers()
            .then(followers => {
                dispatch(initFollowers(followers));
                setTimeout(() => setIsLoading(false), 1000);
            })
            .catch(error => {
                alert(error);
                setIsLoading(false);
            });
    }, []);

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