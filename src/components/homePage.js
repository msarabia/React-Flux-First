/**
 * Created by Msarabia on 23/09/2016.
 */
'use strict';
//
var React = require('react');
var Link = require('react-router').Link;

//import React, {Component} from 'react';
class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administrador</h1>
        <p>React, React Router, and flux </p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

module.exports = Home;
