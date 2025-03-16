import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../redux/hooks";
import { newPost } from "../../redux/profileSlice";
import Post from "../../models/post/Post";
import { v4 } from "uuid";

interface SocketContextInterface {
    xClientId: string
}

export const  SocketContext = createContext<SocketContextInterface>({
    xClientId: ''
})

export default function Io(props: PropsWithChildren): JSX.Element {

    const { children } = props
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ xClientId ] = useState<string>(v4())
    const value = { xClientId }
    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL)

        socket.onAny((eventName, payload) => {

            if(payload.form !== xClientId) {
                switch(eventName) {
                    case 'newPost':
                        // eslint-disable-next-line no-case-declarations
                        const newPostPayload = payload.data as Post
                        dispatch(newPost(newPostPayload))
                        break;
                }
            }
        })
        return () => { socket.disconnect() }
    }, [])

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )

}

