import { PropsWithChildren, useState } from 'react';
import './Auth.css';
import React from 'react';


interface AuthContextInterFace {
    jwt: string,
    setJwt: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = React.createContext<AuthContextInterFace | null>(null);

export default function Auth(props: PropsWithChildren) {

    const [ jwt, setJwt ] = useState<string>('');

    const { children } = props;

    return (
        <AuthContext.Provider value={ { jwt, setJwt } }>
            {children}
        </AuthContext.Provider>
    )
}