import { ReactNode } from "react";
import Login from "./Login";

export default interface User extends Login {
    avatar: string | undefined;
    email: ReactNode;
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string
}