/**
 * Created by Msarabia on 24/09/2016.
 */

'use strict';
var React = require('react');
var Router = require('react-router').Router;
//var DefaultRoute = Router.DefaultRoute;
var Route = require('react-router').Route;

var routes = (
  <Route name="app" path="/" component={require('./components/app')}>
    <Route path="authors" component={require('./components/authors/authorPage')}/>
    <Route path="about" component={require('./components/about/aboutPage')}/>
  </Route>
);

module.exports = routes;