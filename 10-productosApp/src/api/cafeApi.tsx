import axios from 'axios';

const baseURl = 'https://cafe-rn-jona.herokuapp.com/api';

const cafeApi = axios.create({baseURL: baseURl});

export default cafeApi;
