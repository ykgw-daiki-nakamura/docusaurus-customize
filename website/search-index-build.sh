#!/usr/bin/env bash

# Gitのプロジェクトルートに移動
ROOT_DIR=$(git rev-parse --show-toplevel)
cd "$ROOT_DIR"

# 認証無効でビルドして検索インデックスを生成
ENABLE_AUTH=false yarn docusaurus build
mv build/search-index.json search-index.json

# 認証有効で最終ビルドを実行
ENABLE_AUTH=true yarn docusaurus build
mv search-index.json build/search-index.json
