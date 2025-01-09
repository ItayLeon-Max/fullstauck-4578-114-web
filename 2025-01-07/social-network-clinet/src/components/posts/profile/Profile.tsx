import { useEffect, useState } from 'react';
import './Profile.css';
import Post from '../../../models/post/post';
import profile from '../../../services/Profile';

export default function Profile(): JSX.Element {

    const [posts, setPosts] = useState<Post[]>([]);

    //use effect disallows async functions so we need to create a function inside the useEffect
    //to call the async function and set the state with the response data
    useEffect(()=> {
        profile.getProfile().then(setPosts)
        .catch(alert)
    }, [])

    return (
        <div className="Profile">
            <ul>
                {posts.map(({id , title}) => <li key={id}>{title}</li> )}
            </ul>
        </div>
    )
}