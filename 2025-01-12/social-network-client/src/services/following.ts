import axios from "axios";
import User from "../models/user/User";

class Following {
    async getFollowing(): Promise<User[]> {
        const response = await axios.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`);
        return response.data;
    }

    async unFollow(userId: string): Promise<void> {
        await axios.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${userId}`);
    }
}

// Singleton
const following = new Following();
export default following;