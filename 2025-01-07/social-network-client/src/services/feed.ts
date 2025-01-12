class Feed {
    async getFeed() {
        const response = await fetch(`${import.meta.env.VITE_REST_SERVER_URL}/allow/feed`)
        return response.json()
    }
}

// singleton
const feed = new Feed()
export default feed;