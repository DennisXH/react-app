import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CompanyPage from './pages/CompanyPage'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<CompanyPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
