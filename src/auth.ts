import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '@/db';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    adapter: PrismaAdapter(db),
});
