#!/bin/bash
yarn cache clean
rm -rf node_modules/@robinl/
yarn install

# Remove resolved sha
sed -i '' '/v\=3\#/d' yarn.lock