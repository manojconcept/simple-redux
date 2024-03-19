import {combineReducers}from 'redux'

import myReducer from '../Reducer/formReducer';

const rootReducer = combineReducers({
    myReducer,
})

export default rootReducer;