import React from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

const EditPostView = () => (
  <div>
    <h1>Edit Post</h1>
    <form className="ui form">
      <div className="ui field">
        <label htmlFor="title">Title:</label>
        <Field id="title" component="input" type="text" name="text" className="ui input" />
      </div>
      <div className="ui field">
        <label htmlFor="createdAt">createdAt:</label>
        <Field id="createdAt" component="input" type="text" name="createdAt" className="ui input" />
      </div>
      <div className="ui field">
        <label htmlFor="author">Author</label>
        <Field id="author" component="input" type="text" name="author" className="ui input" />
      </div>
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default connect(
  (state) => ({
    initialValues: {
      text: state.post.entry.text,
      createdAt: state.post.entry.meta.createdAt,
      author: state.post.entry.meta.author
    }
  })
)(reduxForm({ form: 'editPost' })(EditPostView));
