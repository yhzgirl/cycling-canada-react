import React from 'react';
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';

require('../styles/App.scss');
require('../styles/contact.scss');

export default () =>
   <Grid className="contact" id="contact-us">
     <Row>
			  <h3>We're pretty easy to get a hold of and would love to hear from you.</h3>
     </Row>
        <Row>
        <Col lg={6}>
          <Image src="images/singapore.jpg" circle responsive />
        </Col>
        <Col className="contact-options" lg={6}>
          <p>
			<i className="fa fa-envelope fa-2x"><a href="mailto:yhzgirl@gmail.com">  Email Us</a></i>
    </p>
    <p>
			<i className="fa fa-twitter fa-2x"><a href="https://twitter.com/cycling_woman"> Twitter</a></i>
    </p>
    <p>
			<i className="fa fa-facebook fa-2x"><a href="http://facebook.com/cyclingacrosscanada">  Facebook</a></i>
    </p>
  </Col>
  </Row>
</Grid>
