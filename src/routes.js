/**
 * Created by Msarabia on 24/09/2016.
 */

'use strict';
var React = require('react');
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var homePage = require('./components/homePage');

//<IndexRoute component={require('./components/homePage')} />
var routes = (
  <Route path="/" component={require('./components/app')}>
    <IndexRoute component={homePage} />
    <Route path="authors" component={require('./components/authors/authorPage')}/>
    <Route path="about" component={require('./components/about/aboutPage')}/>
    <Route path="*" component={require('./components/notFoundPage')}/>
  </Route>
);

module.exports = routes;