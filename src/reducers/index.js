import { combineReducers } from 'redux'
import appData from './dataReducer'
import signUpReducer from './signUpReducer';

const rootReducer = combineReducers({
    appData,
    signUpReducer
})

export default rootReducer