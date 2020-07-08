import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: process.env.BACKEND_URL || 'http://localhost:3333',
  headers: {
    'Content-type': 'application/json',
  },
});
