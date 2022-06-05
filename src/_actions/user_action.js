import axios from 'axios';
import { REGISTER_USER } from './types';

export function registerUser(dataTosubmit) {
  const request = axios.post('/api/users/register', dataTosubmit).then((res) => res.data);

  return { type: REGISTER_USER, payload: request };
}
