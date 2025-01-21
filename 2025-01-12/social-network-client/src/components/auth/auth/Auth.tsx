import { PropsWithChildren, useState } from 'react';
import './Auth.css';
import React from 'react';


interface AuthContextInterFace {
    jwt: string,
    newLogin: (jwt: string) => void,
    logout (): void
}

export const AuthContext = React.createContext<AuthContextInterFace | null>(null);

export default function Auth(props: PropsWithChildren) {

    const JWT_KEY_NAME = 'jwt';

    const [ jwt, setJwt ] = useState<string>(localStorage.getItem(JWT_KEY_NAME) || '');

    const { children } = props;

    function newLogin(jwt: string) {
        setJwt(jwt);
        localStorage.setItem(JWT_KEY_NAME, jwt);
    }

    function logout(){
        localStorage.removeItem(JWT_KEY_NAME);
        setJwt('');
    }

    return (
        <AuthContext.Provider value={ { jwt, newLogin, logout } }>
            {children}
        </AuthContext.Provider>
    )
}