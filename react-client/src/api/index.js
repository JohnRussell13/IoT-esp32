import axios from 'axios';
import { BACKEND } from '../constants/url';

export const fetchSensors = () => axios.get(BACKEND);
export const fetchHistoric = () => axios.get(BACKEND + "/bunch"); // axios.get can't have body!