# Search plugin

## Installation

```
pnpm add @easyops-cn/docusaurus-search-local
```

`docusaurus.config.js`
```
...

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true, // ドキュメントをインデックス化
        language: "ja", // 日本語対応
        hashed: true, // データをハッシュ化
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    ....
```