import { signOut } from '@/actions';
import { signIn } from '@/actions';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function Home() {
    const session = await auth();
    return (
        <div>
            <Button>test</Button>
            <div>
                <form action={signIn}>
                    <button type="submit">Signin with GitHub</button>
                </form>
            </div>
            <div>
                <form action={signOut}>
                    <button type="submit">Signout</button>
                </form>
            </div>

        </div>
    );
}
