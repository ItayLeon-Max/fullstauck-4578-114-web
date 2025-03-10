import {jwtDecode} from "jwt-decode"
import { useContext, useMemo } from "react"
import User from "../models/user/User"
import { AuthContext } from "../components/auth/auth/Auth"

export default function useUsername() {
    const { jwt } = useContext(AuthContext)!

    const name = useMemo(() => {
        if (!jwt) return ""  
        const { name } = jwtDecode<User>(jwt)
        return name
    }, [jwt])
    return name
}