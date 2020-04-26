import React from 'react';
import Main from "./components/Main";
import Header from "./components/Header";
import './App.css';
import Results from './Results';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path = '/' component={Main} exact/>
          <Route path='/results/' component={Results}/>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Home;
