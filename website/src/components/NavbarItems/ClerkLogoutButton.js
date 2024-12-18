import React from 'react';
import { useClerk } from '@clerk/clerk-react';

export default function LogoutButton() {
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