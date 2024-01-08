import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backendappfinal-211f7020749f.herokuapp.com/', // Replace with your backend URL
  timeout: 5000, // Adjust timeout as needed
});

export default instance;
