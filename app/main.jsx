import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home.jsx';
import About from './components/about.jsx';
import FAQ from './components/faq.jsx';
import Route_Map from './components/route_map.jsx';
import Contact from './components/contact.jsx';
import Gear from './components/gear.jsx';
import App from './components/App';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="faq" component={FAQ} />
      <Route path="route_map" component={Route_Map} />
      <Route path="contact" component={Contact} />
      <Route path="gear" component={Gear} />
    </Route>
  </Router>
), document.getElementById('cycling-canada'));

