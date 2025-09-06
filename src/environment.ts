export default {
    api_key: import.meta.env.VITE_API_KEY as string,
    api_url: import.meta.env.VITE_API_URL as string,
    shared_secret: import.meta.env.VITE_SHARED_SECRET as string
} as const;