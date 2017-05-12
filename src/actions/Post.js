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
