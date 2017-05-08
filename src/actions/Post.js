import request from 'superagent';

import { API_ROOT } from '../constants/API';
import * as types from '../constants/actionTypes/PostActionTypes';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST,
  id
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POST_ERROR
});

export const incrementLike = () => ({
  type: types.INCREMENT_LIKE
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));

    return request.get(`${API_ROOT}/${id}`).end(
      (err, response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePost(response.body));
      });
  };
}
