import * as actionTypes from '../Actions/actionTypes'


const initialState = {
    name:'',
    age:0,
    data:[],
}

const reducer = (state = initialState,action)=>{

    switch (action.type) {
        case actionTypes.UPDATE_NAME:
        return{
            ...state,
            name:action.payload
        }

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
            return state;

    }
}

export default reducer;