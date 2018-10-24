import axios from 'axios';

export const loginUser = (userData) => dispatch => {
    axios.post('https://nephelp.herokuapp.com/api/user/login',userData)
        .then(data => {
            dispatch({
                type:"LOGIN_SUCCESS",
                payload: data
            })
        })
        .catch(error => {
            dispatch({
                type:"ERROR_DATA",
                payload: error
            })
        });
};

export const registerUser = (userData) => dispatch => {
    axios.post('https://nephelp.herokuapp.com/api/user/register',userData)
        .then(data => {
            dispatch({
                type:"REGISTER_SUCCESS",
                payload:data
            })
        })
        .catch(error => {
            dispatch({
                type:"ERROR_DATA",
                payload:error
            })
        })
};