import React from 'react';
import Root from '@theme-original/Root';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function CustomRoot({ children }) {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const clerkKey = customFields.CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={clerkKey}>
      <SignedIn>
        <Root>{children}</Root>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}