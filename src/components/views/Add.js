import React from 'react';
import Text from 'components/elements/form/TextForm';
import { assign, set } from 'lodash';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          title: '',
          author: ''
      } }
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

 handleChange(fieldName) {
   return (e) => (
     this.setState(set(
       assign({}, this.state),
       ['form', 'values', fieldName],
       e.target.value
     ))
   );
 }

onSubmit(e) {
  e.preventDefault();
  const { title, author } = this.state.form.values;
  this.props.addPost({ title, author });
}

render() {
    const { title, author } = this.state.form.values;
    return (<div>
      <form className="ui form" onSubmit={this.onSubmit}>
        <Text
         name="title"
         id="title"
         onChange={this.handleChange('title')}
         value={title}
         label="Title"
        />
        <Text
          name="author"
          id="author"
          onChange={this.handleChange('author')}
          value={author} label="Author"
        />
        <input type="submit" className="ui button primary" value="Add" />
      </form>
    </div>
  );
  }
}

export default AddPost;
