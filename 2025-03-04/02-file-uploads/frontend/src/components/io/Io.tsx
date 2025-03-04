import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { newPost } from "../../redux/profileSlice";
import Post from "../../models/post/Post";

export default function Io(props: PropsWithChildren): JSX.Element {
    const { children } = props

    const dispatch = useDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_REST_SERVER_URL)
        socket.onAny((eventName, payload) => {
            switch(eventName) {
                case 'newPost':
                {
                    const newPostPayload = payload as Post
                    dispatch(newPost(newPostPayload))
                    break;
                }
            }    
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

   return (
    <>
       {children}
    </>
   )
}