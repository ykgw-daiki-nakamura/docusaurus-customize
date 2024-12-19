# Redoc Component

## Installation

[Redoc React component](https://redocly.com/docs/redoc/deployment/react) を参照。

```
npm i react react-dom mobx styled-components core-js redoc
```

1. `static/openapi.yaml` を配置する。
1. `src/pages/redocPage.js` を作成する。
1. specUrl で yaml を指定する。

```
import React from 'react';
import Layout from '@theme/Layout';
import { RedocStandalone } from 'redoc';

const ApiDocs = () => {
  return (
    <Layout title="API Documentation">
      <div>
        <RedocStandalone
          specUrl="/openapi.yaml"
          options={{
            scrollYOffset: 60 // navbarの高さ分のオフセット
          }}
        />
      </div>
    </Layout>
  );
};

export default ApiDocs;
```

Page への遷移をナビゲーションバーに設定

`docusaurus.config.js`

```
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {to: '/redocPage', label: 'API Docs', position: 'right' }, //追加
          {
            type: 'search',
            position: 'right',
          },
```

