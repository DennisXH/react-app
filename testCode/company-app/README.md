#React Redux Example App

##Expected functionality:
- Show a list of companies
- Show the details/full record of an existing company
- Create a new company
- Edit an existing company's record
- Show a list of people who work at a given company
- Show the details for a specific person
- Edit a person's record
- Delete a person record
- Create a new person, associating them to an existing company
- Bonus: make the site responsive


Two utility methods to create some test data for you, accessible via HTTP GET:
- [Create test companies](http://localhost:3001/swagger/index.html#!/Companies/get_importCompanies)
- [Import people for a given company](http://localhost:3001/swagger/index.html#!/People/get_importPeopleForCompany_companyId)

[Full REST api docs here](http://localhost:3001/swagger/index.html)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
