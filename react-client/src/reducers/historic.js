import { FETCH_BUNCH } from '../constants/actionTypes.js';

const historic_reducer = (historic = [], action) => {
  switch (action.type) {
    case FETCH_BUNCH:
      return action.payload;
    default:
      return historic;
  }
};

export default historic_reducer;