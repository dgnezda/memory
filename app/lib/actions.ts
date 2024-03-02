'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
// import { sql } from '@vercel/postgres';
// import { z } from 'zod';
// import { revalidatePath } from 'next/cache';
// import { redirect } from 'next/navigation';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw err;
  }
}
