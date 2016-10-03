/**
 * Created by Msarabia on 24/09/2016.
 */

import React from 'react';
import Header from './common/header';
import jQuery from 'jQuery';

var $ = jQuery;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    )
  }
}
