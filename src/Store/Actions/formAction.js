import * as actionTypes from './actionTypes';

const updateName = (name) => ({
    type:actionTypes.UPDATE_NAME,
    payload: name,
})

const updateAge = (age) =>({
    type: actionTypes.UPDATE_AGE,
    payload:age,
})

const saveData = (data) => ({
    type:actionTypes.SAVE_DATA,
    payload:data,
})

export {updateName,updateAge,saveData};





