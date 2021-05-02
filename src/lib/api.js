import axios from 'axios'
import config from '../config.js'

const Api = axios.create({
  timeout: 300000,
  baseURL: `https://${config.API.HOST}/`
});

export default Api