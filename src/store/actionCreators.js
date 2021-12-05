import axios from 'axios';
import { SET_TOKEN, SET_USER } from "./types";

export const setToken = (token) => ({type: SET_TOKEN, payload: token});
export const setUser = (user) => ({type: SET_USER, payload: user});

export const loginAction = (loginData) => async (dispatch) => {
    const {data} = await axios.post('http://localhost:1337/auth/local', loginData);

    localStorage.setItem('token', data.jwt);
    dispatch(setToken(data.jwt))
    dispatch(setUser(data.user))
}

export const registerAction = (registerData) => async (dispatch) => {
    const {data} = await axios.post('http://localhost:1337/auth/local/register', registerData)

    localStorage.setItem('token', data.jwt);
    dispatch(setToken(data.jwt))
    dispatch(setUser(data.user))
}

export const logoutAction = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch(setToken(null))
    dispatch(setUser(null))
}