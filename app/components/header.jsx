import React from 'react';

require('../styles/App.css');
require('../styles/header.scss');

export default function Header() {
  return (
    <div>
      <nav className="header navbar navbar-fixed-top">
        <div className="center-block page-title">
          <a href="/"><h1>Cycling Across Canada for Crohn&apos;s</h1></a>
        </div>
        <ul className="nav nav-pills pull-left">
          <li><a href="https://www.youtube.com/watch?v=5Etw6jnZdHA&list=PLC89iFKPZDsaRgAXTsGUYLqussx49UF_q">Vlogs</a>
          </li>
          <li><a href="route.html">Route</a>
          </li>
          <li><a href="gear.html">Gear</a>
          </li>
          <li role="presentation" className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">
              More Info <span className="caret" />
            </a>
            <ul className="dropdown-menu">
              <li><a href="about.html">About Us</a>
              </li>
              <li><a href="contact.html">Contact Us</a>
              </li>
              <li><a href="faq.html">FAQ&apos;s</a>
              </li>
            </ul>
          </li>
        </ul>

        <ul className="social-media nav pull-right nav-pills">
          <li><a href="https://twitter.com/cycling_woman" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" /> </a>
          </li>
          <li><a href="https://instagram.com/cycling_woman/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x" /> </a>
          </li>
          <li><a href="https://www.youtube.com/channel/UCgZu2jNyVKDtqoq0zTUCDnw?sub_confirmation=1&feature=iv&src_vid=mWC514efG40&annotation_id=annotation_2210725983" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-square fa-2x" /> </a>
          </li>
          <li><a href="http://facebook.com/cyclingacrosscanada" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" /> </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

