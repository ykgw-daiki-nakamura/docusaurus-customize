# Website

## Integration Clerk

### パッケージインストール

`bash`
```
$ pnpm install @clerk/clerk-react dotenv
```

### 環境変数の設定

`.env`
```
CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
```

`docusaurus.config.js`
```js
// If you are using dotenv (https://www.npmjs.com/package/dotenv)
import 'dotenv/config';

export default {
  title: '...',
  url: process.env.URL, // You can use environment variables to control site specifics as well
  customFields: {
    // Put your custom environment here
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  },
};
```

### Root で全ページを保護

`src/theme/Root/index.js`
```js
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
```

### ナビゲーションバーアイテムとしてログアウトボタンを実装

`src/components/NavbarItems/ClerkLogoutButton.js`
```js
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
```

Navbar にアイテムを追加するときのおまじない  
[Theming: use custom components as navbar/sidebar/footer items](https://github.com/facebook/docusaurus/issues/7227)

`src/theme/NavbarItem/ComponentTypes.js`
```js
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import ClerkLogoutButton from '@site/src/components/NavbarItems/ClerkLogoutButton';

export default {
  ...ComponentTypes,
  'custom-logout-button': ClerkLogoutButton, // カスタムアイテムを登録
};
```

`src/theme/NavbarItem/index.js`
```js
import ComponentTypes from './ComponentTypes';

export { default } from '@theme-original/NavbarItem';
export { ComponentTypes };
```

### Navbar にアイテムを追加

`docusaurus.config.js`
```js
themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'custom-logout-button',
            position: 'right',
          },
        ],
      },
```
