#!/bin/bash

git clone https://git.heroku.com/deno-api-heroku.git

cd deno-api-heroku
echo "v1.4.6" > runtime.txt

cp ../Procfile .
cp ../mod.ts .
cp ../server.ts .

git add .
git commit -m "deploy"
git push