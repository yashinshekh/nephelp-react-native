import axios from 'axios';
import {getToken, removeToken, setAuthToken, setToken} from "../utils/authToken";
import jwt_decode from 'jwt-decode';
import {isEmpty} from "../utils/isEmpty";

export const checkLocalToken = () => dispatch => {
    getToken()
        .then(value => {
            dispatch({
                type:"SET_CURRENT_USER",
                payload:!isEmpty(value) ? jwt_decode(value) : {}
            })
        })
        .catch(err => console.log("Error while getting token"))
};

export const loginUser = (userData) => dispatch => {
    axios.post('https://nephelp.herokuapp.com/api/user/login',userData)
        .then(res => {
            const {token} = res.data;
            setToken(token);
            dispatch({
                type:"SET_CURRENT_USER",
                payload:jwt_decode(token)
            })
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
            const {token} = res.data;
            setToken(token);
            dispatch({
                type:"SET_CURRENT_USER",
                payload:jwt_decode(token)
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