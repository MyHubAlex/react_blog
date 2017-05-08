import Post from 'components/Post';
import { connect } from 'react-redux';
import _ from 'lodash';
import { incrementLike } from 'actions/Post';

const stateToProps = (state) => ({
  item: state.post.entry
});

const actionsToProps = (dispatch) => ({
  incrementLike: _.flowRight(dispatch, incrementLike)
});

const PostContainer = connect(stateToProps, actionsToProps)(Post);

export default PostContainer;
