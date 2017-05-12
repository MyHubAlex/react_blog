import { API_CALL } from 'middleware/API';
import * as types from 'constants/actionTypes/PostsActionTypes';

export const incrementLike = (id) => ({
  type: types.INCREMENT_LIKE,
  id
});

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: '/',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}

export function searchPosts(value) {
  return {
    [API_CALL]: {
      endpoint: '/search',
      method: 'GET',
      query: { text: value },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR
      ]
    }
  };
}
