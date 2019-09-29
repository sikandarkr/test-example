import {combineReducers} from 'redux'
import registerReducer from './registerReducer';
import loginUser from './loginReducer';
export default combineReducers({
    register:registerReducer,
    login:loginUser
});


