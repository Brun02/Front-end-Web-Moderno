import axios from 'axios';

const api = axios.create({
  baseURL:  'https://dieta-basica-sysfit-desenvolvimento-web-moderno.josecarlosdjesu.repl.co/food'
  
});

export default api;