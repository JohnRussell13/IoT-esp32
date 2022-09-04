import { combineReducers } from 'redux';
import sensors from './sensors';
import historic from './historic';

export const reducers = combineReducers({ sensors, historic });