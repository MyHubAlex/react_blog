import BlogPage from 'components/BlogPage';
import { connect } from 'react-redux';
import _ from 'lodash';
import { incrementLike, searchPosts } from 'actions/Posts';

const stateToProps = (state) => ({
  list: state.posts.entries
});

const actionsToProps = (dispatch) => ({
  incrementLike: _.flowRight(dispatch, incrementLike),
  searchPosts: _.flowRight(dispatch, searchPosts)
});

const BlogPageContainer = connect(stateToProps, actionsToProps)(BlogPage);

export default BlogPageContainer;
