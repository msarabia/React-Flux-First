"use strict";

import React from 'react';
import Input from '../common/textInput';

export default class AuthorForm extends React.Component {


  render() {
    return (
      <form>
        <h1>Manage Author</h1>
        <Input name="firstName"
               label="First Name"
               placeholder="First Name"
               error={this.props.errors.firstName}
               onChange={this.props.onChange}
               value={this.props.author.firstName}
        />
        <Input name="lastName"
               label="Last Name"
               placeholder="Last Name"
               ref="lastName"
               error={this.props.errors.lastName}
               onChange={this.props.onChange}
               value={this.props.author.lastName}

        />
        <br/>
        <input type="submit"
               value="Save"
               className="btn btn-default"
               onClick={this.props.onSave}
        />
      </form>
    );
  }
}

AuthorForm.propTypes = {
  author  : React.PropTypes.object.isRequired,
  onSave  : React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors  : React.PropTypes.object,
};

module.exports = AuthorForm;