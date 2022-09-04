import { FETCH_ONE } from '../constants/actionTypes.js';

const sensor_reducer = (sensors = [], action) => {
  switch (action.type) {
    case FETCH_ONE:
      return action.payload;
    default:
      return sensors;
  }
};

export default sensor_reducer;