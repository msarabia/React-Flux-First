/**
 * Created by Msarabia on 24/09/2016.
 */
'use strict';

var React = require('react');
import {Link} from 'react-router';
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');


var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },

  deleteAuthor: function (id, event) {
    event.preventDefault(id);
    debugger;
    AuthorActions.deleteAuthor(id);
    toastr.success(' Áuthor Deleted');
  },

  render   : function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td>
            <a href="#" onClick={this.deleteAuthor.bind(this,author.id)}>Borrar</a>
          </td>
          <td>
            <Link to={'authors/'+author.id}>{author.id}</Link>
          </td>
          <td>{author.firstName} {author.lastName} </td>

        </tr>
      )
    };

    // this.state.authors.map : Llama a una funcion pasando cada elemento del arrary
    // y crea un nuevo array con los resultados retornados por la funcion
    return (
      <div>
        <table className="table">
          <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>

      </div>
    );
  }
});

module.exports = AuthorList;