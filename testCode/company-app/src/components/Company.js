import {Link} from "react-router-dom";
import React, {Component} from 'react';

export class Company extends Component {
  render() {
    return (
      <>
        <main>
          <h2>Welcome to the Company Page!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
}

export default Company;