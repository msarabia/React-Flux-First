/**
 * Created by Msarabia on 22/09/2016.
 */
var React = require('react');
var ReactDom = require('react-dom');
var Header = require('./components/common/header');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hasHistory = require('react-router').hashHistory;

var routes = require('./routes');  // referencia a nuestras rutas


var App = require('./components/app');
var AuthorPage = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');


// ejecutamos nuestro router y pasamos nuestras rutas
ReactDom.render((
    <Router history={hasHistory}>
      {routes}
    </Router>
  ),
  document.getElementById('app'));

