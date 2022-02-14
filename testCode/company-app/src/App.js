import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import CompanyPage from './pages/CompanyPage'
import CompanyEditPage from './pages/CompanyEditPage'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Company Page</h1>
      <Switch>
        <Route exact path="/companies"><CompanyPage /></Route>
        <Route exact path="/companies/:companyId"><CompanyEditPage /></Route>
      </Switch>
    </div>
  );
}

export default App;
