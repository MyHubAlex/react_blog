import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

const incrementLike = (entry) => {
    const newEntry = assign({}, entry);
    newEntry.likes += 1;
    return newEntry;
};

const Post = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, state, { entry: action.response });
    case types.INCREMENT_LIKE:
        return assign({}, state, { entry: incrementLike(state.entry) });
    default:
     return state;
  }
};

export default Post;
