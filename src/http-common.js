import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL:
    process.env.BACKEND_URL || 'https://enigmatic-dusk-19196.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
