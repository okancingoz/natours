/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios.post('http://127.0.0.1:3000/api/v1/users/login', {
      email,
      password,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in succesfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
