import React from 'react';
import Header from './header.jsx';

require('../styles/App.scss');

export default() =>
  <div>
    <Header />
    <div>
      {this.props.children}
    </div>
  </div>
;
