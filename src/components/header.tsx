import Link from 'next/link';
import { Input } from './ui/input';
import HeaderAuth from './header-auth';

export default async function Header() {
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
                    <HeaderAuth />
                </div>
            </nav>
        </header>
    );
}
