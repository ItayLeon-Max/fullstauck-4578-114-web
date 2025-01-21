import User from "../../models/user/User";
import AuthAware from "./AuthAware";

export default class Following extends AuthAware {

    async getFollowing(): Promise<User[]> {
        const response = await this.axiosInstance.get<User[]>(`${import.meta.env.VITE_REST_SERVER_URL}/follows/following`);
        return response.data;
    }

    async unFollow(userId: string): Promise<void> {
        await this.axiosInstance.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${userId}`);
    }

    async follow(userId: string): Promise<void> {
        await this.axiosInstance.post(`${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${userId}`);
    }

}

