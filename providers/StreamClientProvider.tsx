import { apiKey } from '@/actions/stream.action';
import { useUser } from '@clerk/nextjs';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const userId = 'jugalt.2023';
const token = 'authentication-token';
const user: User = { id: userId };

// const client = new StreamVideoClient({
//     apiKey,
//     token,
//     user,
//     options: {
//         logLevel: 'info',
//         logger: myLogger,
//     },
// });

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>(),
        { user, isLoaded } = useUser();

    useEffect(() => {
        if (!user || !isLoaded) return;
        if (!apiKey) {
            throw new Error('Stream api Key is missing')
        }

        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user.id,
                name: user.username || user.id,
                image: user.imageUrl
            }
        },)

    }, [user, isLoaded])

    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};

export default StreamVideoProvider;