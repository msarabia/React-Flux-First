/**
 * Created by Msarabia on 03/10/2016.
 */

'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];


var AuthorStore = assign({},EventEmitter.prototype, {
  // function Basicas
  addchangeListener: function (cb) {
    this.on(CHANGE_EVENT,cb);
  },

  removeChangeListener : function (cb) {
    this.removeListener(CHANGE_EVENT,cb);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function () {
    return _authors;
  },
  
  getAuthorById : function (id) {
    return _.find(_authors, {id:id});
  }

});

Dispatcher.register (function(action){
  switch (action.actionType){
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;

    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;

    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, existingAuthor);
      var existingAuthorIndex = _.indexOf(_authors,existingAuthor);

      _authors.splice(existingAuthor,1,action.author);


      AuthorStore.emitChange();
      break;

    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function (author) {
        return action.id === author.id;
      });

      AuthorStore.emitChange();
      break;

  }
});

module.exports = AuthorStore;