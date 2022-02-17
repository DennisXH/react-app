# Test Server

## Pre reqs
Install brew, node, npm & mongo. On OSX the commands below should work.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor #fix all issues
brew update
brew install node
brew tap mongodb/brew
brew install mongodb-community
```

Setup MongoDb data directory
```
mkdir -p data/db
```

## Download dependencies
From your project folder run the following
```
npm install

#Mac users use run start
npm run start

#Windows users run these two commands
npm run mongo
npm run server
```
* Navigate to http://localhost:3001/testCode/index.html
* Do you work within the testCode directory


## Questions/troubleshooting setup issues
Ping your recruiter and they'll help you get it working
