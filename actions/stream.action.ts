"use server";

import { currentUser } from "@clerk/nextjs/server";

export const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY,
    apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) {
        throw new Error('User not logged In');
    }
    if (!apiKey) {
        throw new Error('Api Key not found');
    }
    if (!apiSecret) throw new Error('No API secret')
}