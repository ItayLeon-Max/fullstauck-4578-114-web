import { ReactNode } from "react";

export default interface User {
    avatar: string | undefined;
    email: ReactNode;
    id: string,
    name: string,
    username: string,
    password: string,
    createdAt: string,
    updatedAt: string
}