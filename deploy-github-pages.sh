#!/usr/bin/env bash

yarn build

rm -rf ./docs

mv dist docs

git add .

git commit -m "UPDATE DOCS"