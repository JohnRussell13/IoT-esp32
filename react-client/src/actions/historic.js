import { FETCH_BUNCH } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getHistoric = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHistoric();
    dispatch({ type: FETCH_BUNCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};