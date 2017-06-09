import React from 'react';
import { set, mapValues, assign } from 'lodash';
import classNames from 'classnames';
import Text from 'components/elements/form/TextForm';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: {
      values: {
        fullName: '',
        email: '',
        message: ''
      }
    } };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(this.state.form.values));
  }

  handleChange(fieldName) {
    return (e) => (
      this.setState(set(
        assign({}, this.state),
        ['form','values', fieldName],
        e.target.value
      ))
    );
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    return (
        <div>
          <h1>Contacts</h1>
          <form className="ui form" onSubmit={this.onSubmit}>
          <Text
            name={'fullName'}
            value={fullName}
            onChange={this.handleChange('fullName')}
            label={'Full name'}
          />
          <Text
            name={'email'}
            value={email}
            onChange={this.handleChange('email')}
            label={'Email'}
          />
          <TextArea
            name={'message'}
            value={message}
            onChange={this.handleChange('message')}
            label={'message'}
          />
          <input className="ui button primary" type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

const TextArea = ({ name, value, onChange, label }) => {
  return (
    <div className="ui field">
    <label for={name}>{label}</label>
    <textArea
      id={name}
      className="ui input"
      value={value}
      onChange={onChange}
    />
    </div>
  )
}

export default Contacts;
