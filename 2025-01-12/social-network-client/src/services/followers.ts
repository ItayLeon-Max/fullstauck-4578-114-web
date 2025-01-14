import axios from "axios";
import User from "../models/user/User";

class Followers {
    async getFollowers(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/followers`);
        return response.data;
    }

    async follow(userId: string): Promise<void> {
        await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${userId}`);
    }
}

// Singleton
const followers = new Followers();
export default followers;