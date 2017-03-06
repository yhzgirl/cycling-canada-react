import React from 'react';
import Header from './header.jsx';

require('../styles/App.scss');

export default React.createClass({
  render() {
  return (
    <div>
      <Header />
      <div>
        {this.props.children}
      </div>
    </div>
  );
}
});
