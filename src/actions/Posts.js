import request from 'superagent';

import { API_ROOT } from '../constants/API';
import * as types from '../constants/actionTypes/PostsActionTypes';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export const incrementLike = (id) => ({
  type: types.INCREMENT_LIKE,
  id
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request.get(`${API_ROOT}/`).end(
      (err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(response.body));
      });
  };
}