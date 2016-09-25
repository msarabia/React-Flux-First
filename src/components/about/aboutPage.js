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
class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Acerca de</h1>
        <p>
          Aplicaciones de tecnologia:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
}

module.exports = About;
