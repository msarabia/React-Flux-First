"use strict";

import React from 'react';
import {Router, withRouter} from 'react-router';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/authorApi';
import toastr from 'toastr';

class ManageAuthorPage extends React.Component {

  // Se utiliza el contexto para poder usar  la navegacion
  // ES6 no soporta los mixin
  // Use context for use a navigation, ES6 don't support mixins
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty : false
    };

    //this.routerWillLeave = this.routerWillLeave.bind(this);
  }


  componentWillMount() {
    var authorId = this.props.params.id; //from the path '/author:id'

    if (authorId) {
      this.setState({author: AuthorApi.getAuthorById(authorId)});
    }

  }

  componentDidMount() {
    console.log("dirty Did Mount", this.state.dirty);

    // Establecemos un manejador del evento de cambio de ruta para preguntar si quiere salir sin guardar cambios
    // encaso de haber modificado algun campo
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
  }

  /***
   * @description validate if the user has changes and send a question to leave whitout save
   * @returns {boolean}
   */
  routerWillLeave() {
    if (this.state.dirty && !confirm('Salir sin guardar los cambios ?')) {
      return false;
    }
  }

  setAuthorState(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  }

  /***
   * Validate the form input
   * @returns {boolean}
   */
  authorFormIsValid() {
    var formIsValid = true;
    this.state.errors = {}; //clear any previous errors.

    // validamos la longitud del nombre
    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  }

  saveAuthor(event) {
    // evitar ejecutar el comportamiento normal del formulario
    // catch the default send event of form
    event.preventDefault();
    if (!this.authorFormIsValid()) {
      return;
    }

    // ejecutamos el metodo para enviar los cambios a la API
    // send update to Api
    AuthorApi.saveAuthor(this.state.author);
    this.setState({dirty: false});

    // notificamos al usuario del cambio
    // notify a user was author changed
    toastr.success('Author saved.');
    // redireccionamos despues de guarda a la lista de autores
    // redirect to Authors List after to save
    // reditect cambia por push


    this.context.router.push('/authors');

  }

  render() {
    return (
      <AuthorForm author={this.state.author}
                  onChange={this.setAuthorState.bind(this)}
                  onSave={this.saveAuthor.bind(this)}
                  errors={this.state.errors}
      />
    );
  }


}

// Declaramos router como una propiedad estatica de nuestra clase y variable global de clase
ManageAuthorPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default withRouter(ManageAuthorPage)

