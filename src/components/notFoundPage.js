/**
 * Created by Msarabia on 25/09/2016.
 */
"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;