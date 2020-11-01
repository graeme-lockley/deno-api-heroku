#!/bin/bash

if [ "$HEROKU_USER" == "" ]
then
    echo "error: HEROKU_USER not set"
    exit 1
fi

if [ "$HEROKU_PASSWORD" == "" ]
then
    echo "error: HEROKU_PASSWORD not set"
    exit 1
fi

echo "machine api.heroku.com" > ~/.netrc
echo "  login $HEROKU_USER" >> ~/.netrc
echo "  password $HEROKU_PASSWORD" >> ~/.netrc
echo "machine git.heroku.com" >> ~/.netrc
echo "  login $HEROKU_USER" >> ~/.netrc
echo "  password $HEROKU_PASSWORD" >> ~/.netrc

# heroku login -i

heroku auth:token

heroku git:clone -a deno-api-heroku

cd deno-api-heroku

git config --global user.email "graemel@no9.co.za"
git config --global user.name "Graeme Lockley"

echo "v1.4.6" > runtime.txt

cp ../Procfile .
cp ../mod.ts .
cp ../server.ts .

git add .
git commit -m "deploy"
git push