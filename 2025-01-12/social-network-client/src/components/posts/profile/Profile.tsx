import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import LoaddingPageForProfile from "../../common/LoaddingPageForProfile/LoaddingPageForProfile";
import NewPost from "../new/NewPost";
import Post from "../post/Post";
import { init, resetNewFlags } from "../../../redux/profileSlice";  
import useTitle from "../../../hooks/useTitle";
import { AnimatePresence } from 'framer-motion'
import useService from "../../../hooks/useService";
import ProfileService from "../../../services/auth-aware/profile";

export default function Profile(): JSX.Element {
    useTitle('SN - Profile');

    const profileService = useService(ProfileService);

    const posts = useAppSelector(state => state.profile.posts);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading);

    useEffect(() => {
        dispatch(resetNewFlags());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        let isMounted = true;
        (async () => {
            try {
                if (posts.length === 0 && isMounted) {
                    const postsFromServer = await profileService.getProfile();
                    dispatch(init(postsFromServer));
                }
            } catch (e) {
                console.error("Error fetching profile posts:", e);
                alert("Error fetching profile posts");
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        })();
        return () => { isMounted = false; };
    }, [posts.length, dispatch]);

    return (
        <div className='Profile'>
            {posts.length === 0 && <LoaddingPageForProfile />}

            {posts.length > 0 && <>
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