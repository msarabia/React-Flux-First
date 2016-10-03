/**
 * Created by Msarabia on 24/09/2016.
 */
'use strict';

var React = require('react');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorsPage = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({authors: AuthorApi.getAllAuthors()});
    }
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