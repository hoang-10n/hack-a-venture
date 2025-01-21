'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className='w-full'
      variant='outline'
      type='button'
      onClick={() =>
        signIn('github', { callbackUrl: callbackUrl ?? '/dashboard' })
      }
    >
      <GitHubLogoIcon className='mr-2 h-4 w-4' />
      Continue with Github
    </Button>
  );
}
