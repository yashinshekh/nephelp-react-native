import {combineReducers} from 'redux';
import Error from './errorReducer';
import Auth from './authReducer';

const reducers = combineReducers({
    errors:Error,
    auth:Auth
});

export default reducers;