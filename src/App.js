import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Login from '../src/Homepage/Login.js';
import Landing from './Homepage/Landing.js';
import Search from './Homepage/Search';
import Favorites from './Favorites/Favorites';
import Modal from './Homepage/Modal';
import Test from './test';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/test" component={Test} />

      </Switch>

    </div>
  );
}

export default App;