/**
 * Created by Msarabia on 24/09/2016.
 */
'use strict';

var React = require('react');
var Link = require('react-router').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');


var AuthorsPage = React.createClass({
  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  _onChange: function () {
    this.setState({authors: AuthorStore.getAllAuthors()});
  },

  componentWillMount : function () {
    AuthorStore.addchangeListener(this._onChange);
  },

  componentWillUnmount : function () {
    AuthorStore.removeChangeListener(this._onChange);
  },

  render: function () {

    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default"> Add Author </Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }
});

module.exports = AuthorsPage;