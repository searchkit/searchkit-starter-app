import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Details from './Details';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/details" component={Details}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
