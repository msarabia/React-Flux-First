/**
 * Created by Msarabia on 22/09/2016.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory, hashHistory} from 'react-router';


import  routes from './routes';  // referencia a nuestras rutas
import App from './components/app';
import Header from './components/common/header';
import AuthorPage from './components/authors/authorPage';
import About from './components/about/aboutPage';

import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

 //ejecutamos nuestro router y pasamos nuestras rutas
ReactDom.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));

