import React from 'react';
import { Grid, Row, Col, Image, PageHeader } from 'react-bootstrap';

require('../styles/App.scss');
require('../styles/about.scss');

export default () =>
  <Grid id="about-us" fluid>
    <Row>
      <Col xs={12} lg={6} className="about">
        <PageHeader >Nathan</PageHeader>
        <Image src="images/nathan.jpg" circle responsive />
        <div className="text">
          <p>It all started in 2012. The London Olympics were coming to town and myself and
            Michelle were living in East London just down the road from the Stadium. I was working
            in London Bridge and decided to get myself a secondhand cheap fixe on ebay to get me to
            and from work so I wouldn&#39;t have to use the Tube and that&#39;s when the love for
            cycling started.</p>

          <p>I then found out that my work had a Cycle To Work Scheme so decided to cash in on my
            first road bike which I still have to this day. I slowly started riding further and
            further and built a real bond with this bike. Its at this point I decided to enter for
            the London ride 100 Miles, I&#39;ve always wanted to raise money for a charity so I got
            a place in the event through Great Ormond Street Hospital. That&#39;s when I realised
            I was going to have to take this new hobby of mine to a new level. I signed up for a few
            sportif&#39;s and went out every weekend on my own to make sure I was clocking up the
            miles.</p>

          <p>August 2013 came and there I was on the start line ready cycle 100 miles around closed
            roads in London and the Surrey hills with 2 of my best friends. It was amazing! I
            completed the course in 5 hours 15 mins which I was pretty chuffed with considering I
            had only been cycling for 1 year and more importantly I raised just over £1000 for the
            charity which was a great feeling!</p>

          <p>I then got my 2nd bike on the cycle to work scheme, It was time to go full carbon and
            take my bike tally up to two. I continued using my first road bike to commute to work.
            I just couldn&#39;t get rid of it. I kept the miles flowing and the sportif&#39;s
            coming.</p>

          <p>2014 Myself and Michelle moved to West London and closer to Richmond Park and the
            Surrey Hills. I then acquired a cycling buddy, Michelle got the bug and we started
            sharing exciting cycling adventures around the UK.</p>

          <p>2015 it was time for another bike. The Cycle To Work Scheme just made it far too
            tempting to upgrade. I went for a BMC Team Machine SLR02 and it is amazing!! I also
            started cycling with a club called Sky Velo.</p>

          <p>One day last summer Michelle came home from work and said to me that she wanted to
            cycle across Canada in 2016. I laughed and thought she was kidding, she obviously
            wasn’t kidding because here we are and I&#39;#39;m coming along for the ride! I&#39;m so
            excited and feel really lucky to be able to share an amazing experience like this with
            her and also be able to raise money for a fantastic cause. I&#39;ve been though a lot
            with Michelle and her Crohn&#39;s and I truly believe that exercising regularly is
            helping her keep the disease under control.</p>


          <p>So onto our next chapter, Canada we are coming! </p>

          <p>~Nathan</p>

        </div>
      </Col>
      <Col xs={12} lg={6} className="about">
        <PageHeader >Michelle</PageHeader>
        <Image src="images/michelle.jpg" circle responsive />
        <div className="text">
          <p>Towards the end of 2014 after I had recovered from surgery for Crohn&#39;s to remove a
            damaged section of my stomach I knew I needed to find a way to fit some exercise into
            my life. I decided the best way would be to cycle the 8.5miles/14km commute to work.
          </p>

          <p>So I bought a hybrid bike in November (not the best time of year to start) and
            started commuting on it 3 days a week. I was a very nervous rider for the first few
            months, taking side roads, dirt paths, and taking it slow. As the winter went on I
            gained confidence and when spring arrived I discovered the joy of riding in the warm
            sun.</p>

          <p>When I saw notice at work for a London to Oxford ride (60miles/96km) in July I
            thought it would be something fun for Nathan and I to do together. We signed up and I
            started training, including coaching sessions offered by Sky. Before I knew it I&#39;d
            also signed up for Sky Velo and showed up one Sunday for the Windsor Loop ride. I
            arrived on my hybrid bike, lock still attached, realising when I saw the serious kit
            the others had I would soon be buying another bike. However they were super friendly
            and supportive and I&#39;ve been enjoying weekend rides with them ever since (on my new
            road bike).</p>

          <p>After completing the Oxford ride (in clip-less shoes no less) I felt like I could
            take on anything on my bike that I set my mind to, and since I was long overdue for
            an adventure I decided that some time in my home country on a bike was just the thing.
            Before I knew it I was googling how long it would take to ride coast to coast across
            Canada. I then mentioned my idea to Nathan and once he realised I was serious he was
            on board too.</p>

          <p>Plans are now truly under way, we have a map of Canada plastered on our living room
            wall for route planning, I have a personal trainer whom I see every week (thank you to
            Sky), we are learning about lightweight tents, sleeping bags, touring bikes, bike
            maintenance and more.</p>

          <p>I love cycling, it’s freeing, fun, a way to explore the world. However the biggest
            motivator for me to cycle as much as I can, is that since I took up cycling I remain
            symptom free from Crohn&#39;s. This is why we want to dedicate the cycling across Canada
            challenge to raising money for the UK and Canadian charities of Crohn&#39;s and colitis
            ($1 for every km), cycling has given me not just happiness but my health too and I
            plan to make the most of it.</p>

          <p>~Michelle</p>
        </div>
      </Col>
    </Row>
  </Grid>;

