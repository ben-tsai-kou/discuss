'use server';

import { signIn as signInAuth, signOut as signOutAuth } from '@/auth';

export const signIn = async () => {
    await signInAuth('github');
};

export const signOut = async () => {
    await signOutAuth();
};
