#!/bin/bash

HEORKU_USER=graemel@no9.co.za
HEROKU_PASSWORD=0ed8ec8c-859a-4181-bfc1-6f3e8c8d7e86

echo "machine api.heroku.com" > ~/.netrc
echo "  login $HEROKU_USER" >> ~/.netrc
echo "  password $HEROKU_PASSWORD" >> ~/.netrc
echo "machine git.heroku.com" >> ~/.netrc
echo "  login $HEROKU_USER" >> ~/.netrc
echo "  password $HEROKU_PASSWORD" >> ~/.netrc

# heroku login

heroku git:clone -a deno-api-heroku

cd deno-api-heroku
echo "v1.4.6" > runtime.txt

cp ../Procfile .
cp ../mod.ts .
cp ../server.ts .

git add .
git commit -m "deploy"
git push