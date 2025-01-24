import Link from 'next/link';
import { auth } from '@/auth';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { signIn, signOut } from '@/actions';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode;
    if (session?.user) {
        console.log(session.user);
        authContent = (
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        {session.user.image && (
                            <AvatarImage src={session.user.image} />
                        )}
                        <AvatarFallback>{session.user.name}</AvatarFallback>
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
