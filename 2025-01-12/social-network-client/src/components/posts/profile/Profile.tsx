import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import LoaddingPageForProfile from "../../common/LoaddingPageForProfile/LoaddingPageForProfile";
import NewPost from "../new/NewPost";
import Post from "../post/Post";
import profile from "../../../services/profile";
import { init } from "../../../redux/profileSlice";
import useTitle from "../../../hooks/useTitle";
import { AnimatePresence } from 'framer-motion'

export default function Profile(): JSX.Element {
    useTitle('SN - Profile');

    const posts = useAppSelector(state => state.profile.posts);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading)
    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                console.log("Fetching profile posts...");
                if (posts.length === 0 && isMounted) {
                    const postsFromServer = await profile.getProfile();
                    console.log("Posts fetched:", postsFromServer);
                    dispatch(init(postsFromServer));
                }
            } catch (e) {
                console.error("Error fetching profile posts:", e);
                alert("Error fetching profile posts");
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                    console.log("Loading finished");
                }
            }
        })();
        return () => { isMounted = false; };
    }, [posts.length, dispatch]);
    return (
        <div className='Profile'>
    { posts.length === 0 && <LoaddingPageForProfile />}

    { posts.length > 0 && <>
      <NewPost />
      <AnimatePresence>
        {posts.map(p =>
          <Post
            key={p.id}
            post={p}
            isAllowActions={true}
          />
        )}
      </AnimatePresence>
    </>}
  </div>
    );
}