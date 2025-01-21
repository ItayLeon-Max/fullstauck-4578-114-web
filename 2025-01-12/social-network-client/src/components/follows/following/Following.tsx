import './Following.css';
import { useEffect, useState } from 'react';
import FollowingService from '../../../services/auth-aware/Following';
import Follow from '../follow/Follow';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followingSlice';
import FollowSkeleton from '../../common/LoaddingPageEffect-followers/LoaddingPageEffect';
import useService from '../../../hooks/useService';

export default function Following() {
    const following = useAppSelector(state => state.following.following);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);
    
    const followingService = useService(FollowingService);

    useEffect(() => {
        followingService.getFollowing()
            .then(following => {
                setTimeout(() => {
                    dispatch(init(following));
                    setIsLoading(false);
                }, 1500); 
            })
            .catch(error => {
                alert(error);
                setIsLoading(false);
            });
    }, [dispatch]);

    return (
        <div className="Following">
            {isLoading ? (
                <FollowSkeleton />
            ) : (
                <>
                    <h2>Following</h2>
                    {following.map(user => (
                        <Follow
                            key={user.id}
                            user={user}
                        />
                    ))}
                </>
            )}
        </div>
    );
}