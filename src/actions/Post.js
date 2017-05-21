import * as types from 'constants/actionTypes/PostActionTypes';
import { API_CALL } from 'middleware/API';

export const incrementLike = () => ({
  type: types.INCREMENT_LIKE
});

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR
      ]
    }
  };
}

export function addPost(values) {
  return {
    [API_CALL]: {
      endpoint: '/add',
      method: 'POST',
      payload: { post: values },
      types: [
        types.ADD_POST_REQUEST,
        types.ADD_POST_SUCCESS,
        types.ADD_POST_ERROR
      ]
    }
  };
}
