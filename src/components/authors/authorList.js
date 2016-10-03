/**
 * Created by Msarabia on 24/09/2016.
 */
'use strict';

var React = require('react');


var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  render   : function () {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td>
            <a href={"/#authors/"+author.id}>{author.id}</a>
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