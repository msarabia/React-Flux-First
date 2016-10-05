/**
 * Created by Msarabia on 03/10/2016.
 */

'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  /***
   * @description Se define el creador de una accion,
   * @summary Avisa al despachador que se acaba de crear un author
   * @param author
   */
  createAuthor: function (author) {
    var newauthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_AUTHOR,
      author:newauthor
    })
  },

  updateAuthor: function (author) {
    var updateAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_AUTHOR,
      author:updateAuthor
    })
  },

  deleteAuthor: function (id) {
    AuthorApi.deleteAuthor(id);

    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_AUTHOR,
      id:id
    });
  }

};

module.exports = AuthorActions;