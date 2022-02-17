#React Redux Example App

##Expected functionality:
- Show a list of companies `/companies`
- Show the details/full record of an existing company `/companies/id`
- Create a new company `/companies/create`
- Edit an existing company's record `/companies/id`
- Show a list of people who work at a given company `/companies/id/people`
- Show the details for a specific person `/people/id`
- Edit a person's record `/people/id`
- Delete a person record `/people/id`
- Create a new person, associating them to an existing company `/people/create`
- Bonus: make the site responsive

### Available Scripts


####To install all dependencies
`npm install`

####Runs the app in the development mode.<br />
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##API test server

###API Doc
http://localhost:3001/swagger

### Pre server reqs
Install brew, node, npm & mongo. On OSX the commands below should work.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor #fix all issues
brew update
brew install node
brew tap mongodb/brew
brew install mongodb-community
```

Setup MongoDb data directory if folder doesn't exist
```
mkdir -p data/db
```

####Windows users run these two commands
```
npm run mongo
npm run server
```
