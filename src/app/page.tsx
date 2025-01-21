import { signOut } from '@/actions';
import { signIn } from '@/actions';
import { Button } from '@/components/ui/button';

export default async function Home() {
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
