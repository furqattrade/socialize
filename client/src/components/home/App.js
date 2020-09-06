import React from 'react';
import './App.css';
import {Route} from 'react-router-dom/Route'
import MainContent from "../../shared/components/layout/content/Main-Content";


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={MainContent}/>
      <Route path="/" exact component={MainContent}/>
    </div>
  );
}

export default App;
