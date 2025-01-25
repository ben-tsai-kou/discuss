'use client';

import { useSession } from 'next-auth/react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { signIn, signOut } from '@/actions';

export default function HeaderAuth() {
    const session = useSession();

    let authContent: React.ReactNode;

    if (session.status === 'loading') {
        return null;
    }

    if (session.data?.user) {
        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        {session.data.user.image && (
                            <AvatarImage src={session.data.user.image} />
                        )}
                        <AvatarFallback>
                            {session.data.user.name}
                        </AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-30">
                    <form action={signOut}>
                        <Button type="submit" className="w-full">
                            Sign Out
                        </Button>
                    </form>
                </PopoverContent>
            </Popover>
        );
    } else {
        authContent = (
            <div className="flex gap-3">
                <form action={signIn}>
                    <Button type="submit" className="bg-zinc-500">
                        Sign in
                    </Button>
                </form>
                <form action={signIn}>
                    <Button type="submit">Sign up</Button>
                </form>
            </div>
        );
    }

    return authContent;
}
