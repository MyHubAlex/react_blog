import Add from 'components/views/Add';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addPost } from 'actions/Post';

const stateToProps = (state) => ({
  post: state.post.entry
});

const actionsToProps = (dispatch) => ({
  addPost: _.flowRight(dispatch, addPost),
});

const AddPost = connect(stateToProps, actionsToProps)(Add);

export default AddPost;
