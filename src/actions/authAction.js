import axios from 'axios';
import {getToken, removeToken, setAuthToken, setToken} from "../utils/authToken";
import jwt_decode from 'jwt-decode';

export const loginUser = (userData) => dispatch => {
    axios.post('https://nephelp.herokuapp.com/api/user/login',userData)
        .then(res => {
            const {token} = res.data;
            setToken(token);


        })
        .catch(err => {
            dispatch({
                type:"ERROR_DATA",
                payload: err.response.data
            })
        });
};

export const registerUser = (userData) => dispatch => {
    axios.post('https://nephelp.herokuapp.com/api/user/register',userData)
        .then(res => {
            dispatch({
                type:"REGISTER_SUCCESS",
                payload:res.data
            })
        })
        .catch(err => {
            dispatch({
                type:"ERROR_DATA",
                payload:err.response.data
            })
        })
};

export const logout = () => dispatch => {
    removeToken();
    setAuthToken(false);
    dispatch({
        type:'SET_CURRENT_USER',
        payload:{}
    })
};