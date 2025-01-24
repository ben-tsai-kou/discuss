import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode;
    if (session?.user) {
        console.log(session.user);
        authContent = (
            <div>
                <Avatar>
                    {session.user.image && (
                        <AvatarImage src={session.user.image} />
                    )}
                    <AvatarFallback>{session.user.name}</AvatarFallback>
                </Avatar>
            </div>
        );
    } else {
        authContent = (
            <div className="flex gap-3">
                <Button type="submit" className="bg-zinc-500">
                    Sign in
                </Button>
                <Button type="submit">Sign up</Button>
            </div>
        );
    }
    return (
        <header className="border">
            <nav className="flex justify-between items-center">
                <div className="px-16 py-3">
                    <Link href="/" className="font-bold">
                        Discuss
                    </Link>
                </div>
                <div className="px-16 py-3">
                    <Input />
                </div>
                <div className="px-16 py-3">{authContent}</div>
            </nav>
        </header>
    );
}
