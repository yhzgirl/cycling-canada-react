import React from 'react';
import { PageHeader } from 'react-bootstrap';
import styles from '../styles/home.scss';

export default () =>
  <div id="route_map">
    <div className="page-header center-block">
      <PageHeader>The Route</PageHeader>
    </div>
    <iframe className="gps-route center-block" src="//ridewithgps.com/routes/11198262/embed" height="500px" width="95%" ></iframe>
  </div>;
