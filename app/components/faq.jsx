import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';

require('../styles/App.scss');
require('../styles/faq.scss');

export default () =>
<div>
  <Grid id="faq">
    <PageHeader>FAQ</PageHeader>
    <Row>
      <Col >
        <h4><strong>Q: You are doing what?</strong></h4>
        <p>We're cycling across Canada raising money and awareness of an inflammatory bowel disease called Crohn's. We will be cycling self supported, meaning we will carry all our own gear.</p>
        <h4><strong>Q: How long will it take?</strong></h4>
        <p>It's about 6700km/4200miles from Vancouver to Halifax. As to how long this takes, there are varying answers. We'd like to enjoy our time cycling across Canada so we'll plan to take in some sites or stop for a swim on a hot day in order to have things to look forward to along the way. We do have a limited amount of time (we have a plane to catch 12Sept) we believe it will take us between 65 and 70 days.</p>
        <h4><strong>Q: Where will you stay?</strong></h4>
        <p>We'll be using a combination of accommodation friends places, hostels, campgrounds, wild camping and warmshowers.com a cycling community which offers a place to stay (a bed or a yard for a tent) to fellow cyclist.</p>
        <h4><strong>Q: What about bears?</strong></h4>
        <p>We have lots to learn about camping in Canada and how to camp safely amongst bears is one of them.</p>
        <h4><strong>Q: What about your jobs?</strong></h4>
        <p>Michelle's company Sky has a leave of absence policy and she has requested and had approved the 3 months off needed.</p> 
        &nbsp;
        <p>Nathan's company which is much smaller has been very supportive of our endevor and has also granted him the time off.</p>
      </Col>
    </Row>
  </Grid>
</div>