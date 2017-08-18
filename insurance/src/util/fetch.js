import axios from 'axios';

let $http = axios.create({
  baseURL: 'http://m.dev.luckybao365.com',
  responseType: 'json',
  headers:{
      'Content-Type':'application/x-www-form-urlencoded'
  }
});



export default $http;
