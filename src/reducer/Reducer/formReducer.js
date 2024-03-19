import * as actionTypes from '../Actions/actionTypes'


const initialState = {
    name:'', //name
    age:0, //age
    data:[], // button
}

const reducer = (state = initialState,action)=>{ //state,action

    switch (action.type) {

        case actionTypes.UPDATE_NAME:
        return{
            ...state,  
            name:action.payload


        }

        // {name:"",age:0,data : [], name:action.payload} overwrite

        case actionTypes.UPDATE_AGE:
            return{
                ...state,
                age:action.payload
            }

        case actionTypes.SAVE_DATA:
            return{
                ...state,
                data:[...state.data,action.payload]
            }

        default:
            return state; //error

    }
}

export default reducer;