import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURl = 'https://cafe-rn-jona.herokuapp.com/api';

const cafeApi = axios.create({baseURL: baseURl});

/* middleware de axion */
cafeApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export default cafeApi;
