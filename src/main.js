/**
 * Created by Msarabia on 22/09/2016.
 */

$ = jQuery = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');

var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');


var App = React.createClass({
  render: function () {
    var Child;

    switch (this.props.route) {
      case 'about':
        Child = About;
        break;
      case 'authors':
        Child = Authors;
        break;
      default:
        Child = Home;
    }
    return (
      <div>
        <Header />
        <Child/>
      </div>
    )
  }
});

function render() {
  var route = window.location.hash.substr(1);
  console.log(window.location.hash);
  ReactDom.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();


//


//
//$ = jQuery = require('jquery');
//var React = require('react');
//var ReactDom = require('react-dom');
//var Home = require('./components/homePage');
//var About = require('./components/about/aboutPage');
////
////var App = React.createClass({
////  render: function () {
////    var Child;
////
////    switch (this.props.route) {
////      case 'about':
////        Child == About;
////        break;
////      default:
////        Child = Home;
////    }
////
////    return (
////      <div>
////        <Child/>
////      </div>
////    )
////  }
////});
//
//ReactDom.render(<Home />, document.getElementById('app'));