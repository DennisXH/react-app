import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import CompanyPage from './pages/CompanyPage'
import CompanyEditPage from './pages/CompanyEditPage'
import CompanyCreatePage from "./pages/CompanyCreatePage";
import PeoplePage from "./pages/PeoplePage";
import PersonCreatePage from "./pages/PersonCreatePage";
import PersonEditPage from "./pages/PersonEditPage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to <a href={'/companies'}>Company Page</a></h1>
      <Switch>
        <Route exact path="/companies"><CompanyPage /></Route>
        <Route exact path="/companies/create"><CompanyCreatePage /></Route>
        <Route exact path="/companies/:companyId"><CompanyEditPage /></Route>
        <Route exact path="/companies/:companyId/people"><PeoplePage /></Route>
        <Route exact path="/people/create"><PersonCreatePage /></Route>
        <Route exact path="/people/:personId"><PersonEditPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
