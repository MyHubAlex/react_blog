import { assign } from 'lodash/object';
import _ from 'lodash';
import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

const incrementLike = (entries, id) => (
    _.map(entries, (item) => {
      console.log(entries);
      if (item.id === id) {
        item.likes += 1;
      }
        return item;
      })
);

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, { entries: action.response });
    case types.INCREMENT_LIKE:
      return assign({}, state, { entries: incrementLike(state.entries, action.id) });
    default:
     return state;
  }
};

export default Posts;
