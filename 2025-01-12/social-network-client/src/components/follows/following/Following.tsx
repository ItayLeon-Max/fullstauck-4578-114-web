import './Following.css';
import { useEffect, useState } from 'react';
import followingService from '../../../services/following';
import Follow from '../follow/Follow';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { init } from '../../../redux/followingSlice';
import FollowSkeleton from '../../common/LoaddingPageEffect-followers/LoaddingPageEffect';

export default function Following() {
    const following = useAppSelector(state => state.following.following);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        followingService.getFollowing()
            .then(following => {
                // מדמה השהייה של הטעינה כדי שנראה את האפקט
                setTimeout(() => {
                    dispatch(init(following));
                    setIsLoading(false);
                }, 1500); // 1.5 שניות של טעינה מדומה
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