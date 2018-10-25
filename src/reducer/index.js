import {combineReducers} from 'redux';
import Error from './errorReducer';
import Auth from './authReducer';
import Email from './emailReducer';

const reducers = combineReducers({
    errors:Error,
    auth:Auth,
    email:Email
});

export default reducers;