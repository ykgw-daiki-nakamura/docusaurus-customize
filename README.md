# docusaurus-install-clerk

## メモ

redoc インストール時に、react, react-dom のバージョンが上がると Docusaurus をビルドできなくなるので注意。
もしバージョンをあげてしまったら、バージョンを戻す。

https://github.com/facebook/docusaurus/issues/7532

clerk の認証を付けると、検索機能の index を作成することができない。
index を作成するときは、認証をかけないようにする。

https://github.com/easyops-cn/docusaurus-search-local/issues/210

以下のビルドスクリプトで認証を回避してビルドするようにした。

```
# chmod +x build-script.sh で実行権限を付与する必要あり

# 1. Without authでビルド
echo "Building without auth..."
ENABLE_AUTH=false pnpm docusaurus build

# search-index.json を退避
mv build/search-index.json search-index-noauth.json

# ビルドフォルダを一旦クリア（既存buildを消す）
rm -rf build

# 2. Authありでビルド
echo "Building with auth..."
ENABLE_AUTH=true pnpm docusaurus build

# Authありビルド済みフォルダに noauth時の search-index.json を戻す
mv search-index-noauth.json build/search-index.json

echo "Final build complete!"
```