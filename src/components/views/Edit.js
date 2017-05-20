import React from 'react';

import { Field, reduxForm } from 'redux-form';

const EditPostView = () => (
  <div>
    <h1>Edit Post</h1>
    <form>
      <div className="ui filed">
      <label htmlFor="title">Title</label>
        <Field component="input" type="text" name="title" className="ui input" />
      </div>
      <input type="submit" className="ui button primary" value="Update" />
    </form>
  </div>
);

export default EditPostView;
