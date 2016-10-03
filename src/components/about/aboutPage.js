/**
 * Created by Msarabia on 23/09/2016.
 */
'use strict';
//
var React = require('react');

//var About = React.createClass({
//  statics: {
//    transitionOnEnter: function(transition, params, query, callback) {
//      if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
//        transition.about();
//      } else {
//        callback();
//      }
//    },
//
//    willTransitionFrom: function(transition, component) {
//      if (!confirm('Are you sure you want to leave a page that\'s this exciting?')) {
//        transition.about();
//      }
//    }
//  },
//
//
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


  static willTransitionFrom(component, transition) {
    if (!window.confirm('Are you sure you want to leave ?')) {
      transition.abort();
    }
  }

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
