#!/usr/bin/sh
git status
git add .
git commit -m "publish: 发布v$PKG_VERSION"

npm version patch
npm run build-prepub 
npm publish --access=public

$PKG_VERSION=`node -p "require('./package.json').version"`  
echo $PKG_VERSION

git tag $PKG_VERSION
git push origin --tags