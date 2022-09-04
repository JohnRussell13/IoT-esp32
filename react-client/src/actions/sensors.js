import { FETCH_ONE } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const getSensors = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSensors();
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};