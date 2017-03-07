import React from 'react';
import { PageHeader } from 'react-bootstrap';

require('../styles/App.scss');

export default () =>
  <div id="route_map">
    <div className="page-header center-block">
      <h3>This is the outline of our cycling across Canada route. There are likely to be adjustments to the route as we learn things while on the road.</h3>
    </div>
    <iframe className="gps-route center-block" src="//ridewithgps.com/routes/11198262/embed" height="500px" width="95%" frameborder="0"></iframe>
  </div>
