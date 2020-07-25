import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <strong>Package.json:</strong> This file contains dependecies required for project. <br/>
          <strong>Node_modules:</strong> All the dependecies are installed here.<br/>
          <strong>Public:</strong> This folder will contain three files<br/>
                  manifest.json: will concern of progressive webapps.<br/>
          <strong>favicon.icon:</strong> icon.<br/>
          <strong>index.hml:</strong> we are making single page application every time view gets dynamically changes but every time this fie will get served up.
          we will not make any changes in this file. we can make changes in head tag but definatly not in body tag.react will control the UI. for that purpose we have one DIV tag with id="root".<br/>

          <strong>SRC:</strong>         <br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
