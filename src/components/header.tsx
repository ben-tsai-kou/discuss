import { auth } from '@/auth';
import Link from 'next/link';
import { Input } from './ui/input';

export default async function Header() {
    const session = await auth();
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
                <div className="px-16 py-3">
                    {session?.user ? (
                        <div>signed out</div>
                    ) : (
                        <div>signed in</div>
                    )}
                </div>
            </nav>
        </header>
    );
}
