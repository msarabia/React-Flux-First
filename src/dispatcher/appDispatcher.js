/**
 * Created by Msarabia on 03/10/2016.
 */

// Dispatcher singleton

// var Dispatcher = require('flux').Dispatcher;
// aqui se registran todas las Stores
import {Dispatcher} from 'flux';

module.exports = new Dispatcher();

export  {Dispatcher};