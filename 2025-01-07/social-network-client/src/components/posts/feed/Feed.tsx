import { useEffect, useState } from 'react'
import Post from '../../../models/post/Post'
import './Feed.css'

export default function Feed() {

    const [feed, setFeed] = useState<Post[]>([])

    //get feed from server
    useEffect(() => {
        // fetch('http://localhost:3001/feed')
        //     .then(response => response.json())
        //     .then(setFeed)
        //     .catch(alert)
        // or
        (async () => {
            try {
                const response = await fetch('http://localhost:3003/allow/feed')
                const feed = await response.json()
                setFeed(feed)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    return (
        <div className='Feed'>
            feed
        </div>
    )
}