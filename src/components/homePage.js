/**
 * Created by Msarabia on 23/09/2016.
 */
'use strict';
//
var React = require('react');
//
//var Home = React.createClass({
//  render: function () {
//    return (
//      <div className="jumbotron">
//        <h1>Pluralsoght Administrador</h1>
//        <p>React, React Router, and flux for ultra responsive</p>
//      </div>
//    );
//  }
//});

//import React, {Component} from 'react';
class Home extends React.Component {
  render() {
        return (
          <div className="jumbotron">
            <h1>Administrador</h1>
            <p>React, React Router, and flux </p>
          </div>
        );
  }
}

module.exports = Home;
