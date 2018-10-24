import axios from 'axios';
import {AsyncStorage} from 'react-native';

export const setToken = token => {
    AsyncStorage.setItem("token", token);
};

export const getToken = () => new Promise((resolve,reject) => {
    AsyncStorage.getItem("token").then((value) => {
        resolve(value);
    }).done();
});

export const removeToken = () => {
    AsyncStorage.removeItem("token");
};

export const setAuthToken = (token) => {
    if(token){
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
};