import React from 'react';
import { useClerk } from '@clerk/clerk-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LogoutButton() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const enableAuth = customFields.ENABLE_AUTH === "true";
  
  if (!enableAuth) {
    return null;
  }

  const { signOut } = useClerk();
  const handleLogout = () => {
    signOut();
  };
  return (
    <button
      onClick={handleLogout}
      style={{
        margin: '4px 12px',
        padding: '8px 16px',
        backgroundColor: '#6200EE',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Logout
    </button>
  );
}