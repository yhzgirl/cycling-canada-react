import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home.jsx';
import About from './components/about.jsx';
import App from './components/App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('cycling-canada'));

