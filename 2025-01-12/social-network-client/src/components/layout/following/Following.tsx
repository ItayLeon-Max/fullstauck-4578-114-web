import './Following.css'
import { useEffect, useState } from 'react'
import User from '../../../models/user/User'
import Follow from '../../follows/follow/Follow'
import useService from '../../../hooks/useService'
import FollowingService from '../../../services/auth-aware/Following'

export default function Following() {
    const [following, setFollowing] = useState<User[]>([])

    const followingService = useService(FollowingService)

    useEffect(() => {
        followingService.getFollowing()
            .then(setFollowing)
            .catch(alert)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
       <div className='Following'>
                   {following.map(follow => <Follow 
                                             key={follow.id} 
                                             user={follow}
                                            ></Follow>)}
               </div>
    )
}