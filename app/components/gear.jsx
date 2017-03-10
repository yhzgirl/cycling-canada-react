import React from 'react';
import { Grid, Image, Row, Col, PageHeader } from 'react-bootstrap';
import styles from '../styles/gear.scss';

export default () =>
<div className="gear">
  <Grid>
	  <PageHeader>The Gear</PageHeader>
    <Row>
      <Col lg={6}>
				<h4>Bikes</h4>
				<p>Our our first major purchase, our bikes. I'm happy to say when cycling across Canada we'll be on Canadian bikes. Both of us will be riding the Brodie Argus bike. The Argus is a touring bike with a steel frame and disc brakes. A nice sturdy bike with good breaking to help us down the mountains</p>
         <Image responsive src="images/argus.png" alt="Brodie Argus Bike" />
      </Col>
      <Col lg={6}>
				<h4>Tent</h4>
				<p>Our tent will be the roof over our heads most nights. We've chosen the Hubba Hubba NX tent by MRS. This tent strikes the right balance between space, protection from the environment and weight (it's only 1.5kg!).</p>
         <Image className="cutout-image" responsive src="images/hubbahubbatent.jpg" alt="MSR hubba hubba tent" />
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
				<h4>Sleeping Bags</h4>
				<p>Alpkit offered good value for money and after comparing the down and synthetic version of this sleeping bag and being unable to tell the difference we went for the synthetic at almost half the cost.</p>
        <Image className="cutout-image" responsive src="images/mountainGhostAlpkitsleepingbag.jpg" alt="Alpkit Mountain Ghost sleeping bag" />
      </Col>
      <Col lg={6}>
				<h4>Panniers</h4>
				<p>We liked the look, the simplicity the waterproofing and price of these Crosso Panniers. We have 2 for the front and 2 for the back to help balance the weight on the bike.</p>
        <Image className="cutout-image" responsive src="images/crossoTwistPanniers.jpg" alt="Crosso Twist Panniers" />
      </Col>
    </Row>

    <Row>
      <Col lg={6}>
				<h4>Sleeping Mats</h4>
				<p>To make sure we get a good nights sleep we went for the most comfortable lightest and best insulated sleeping pad we could afford . After a lot of research we choose the Thermarest Neoair all season mat in large.</p>
        <Image className="cutout-image" responsive src="images/NeoAir_All_Season.jpg" alt="Thermarest Neoair all season sleeping mat" />
      </Col>
      <Col lg={6}>
			  <h4>Cooking Stove</h4>
				<p>The stove we choose is the MSR Superfly. It's small, light, easy to light and easy to find fuel for. It ticks all the boxes. Let's see if Nathan's cooking skills can cook us up something nice with this little guy.</p>
        <Image className="cutout-image" responsive src="images/msr_superfly_stove.jpg" alt="Crosso Twist Panniers" />
      </Col>
    </Row>
  </Grid>
</div>
