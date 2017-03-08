import React from 'react';
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';

require('../styles/App.scss');
require('../styles/home.scss');

export default () =>
  <div>
    <Grid>
      <Row>
        <Col lg={3}>
          <Image responsive className="center-block" src="images/logo-medium-reverse@2x.png" />
        </Col>
        <Col className="page-description" lg={9}>
          <p>On June 11th, 2016 we left to go on the biggest ride of our lives, cycling across Canada self supported
            from Vancouver to Halifax (aprox 6650km). It was the ride of a lifetime and the start of our bike touring
            adventures.
          </p> &nbsp;

          <p>Here you&#39;ll find information about our gear, route and if you would like to see our video
            diaries you will find them on our <a href="https://www.youtube.com/channel/UCgZu2jNyVKDtqoq0zTUCDnw">
              YouTube channel</a>
          </p>&nbsp;

					<p>Thank you to everyone who donated, $8500 was raised far exceeding our target of $6600.</p>
        </Col>
      </Row>
      <Row>
        <Col className="youtube" lg={12}>
          <h2>The Vlog - <strike>Follow</strike> Watch the adventure <i class="fa fa-share fa-rotate-90"></i></h2>
          <iframe className="center-block" width="560" height="350" src="https://www.youtube.com/embed/Ovl7Zcuq6Yc"/>
        </Col>
      </Row>
        <Row>
          <Col className="strava" lg={6}>
					  <h2>How far Michelle's travelled this week</h2>
            <iframe className="center-block" height='176' width='400' src='https://www.strava.com/athletes/6288849/activity-summary/7fd9e0e1cfb50f535a4affd0e0e692e3f80c8916' />
          </Col>
          <Col className="strava" lg={6}>
					  <h2>How far Nathan's travelled this week</h2>
            <iframe className="center-block" height='176' width='400' src='https://www.strava.com/athletes/1952277/activity-summary/008b86e17a31f89e59f18526eb2da9c07bb07983' />
          </Col>
      </Row>
  </Grid>
</div>;

