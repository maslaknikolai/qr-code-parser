#!/usr/bin/env bash

git branch -D gh-pages
git co -b gh-pages

yarn build

rm -rf ./docs

mv dist docs

git add .
git commit -m "UPDATE"

git push origin gh-pages --force

git co master
