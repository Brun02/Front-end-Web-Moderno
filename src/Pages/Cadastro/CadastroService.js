import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:3000/api/v1/cadastro',
});

const salvaCadastro = async (cadastro) => {
  return await api.post('/', cadastro);
}
export default salvaCadastro;