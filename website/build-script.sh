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