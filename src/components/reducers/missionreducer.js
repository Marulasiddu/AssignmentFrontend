import { FETCHDATA } from '../actions/types';

export const reducer = (state={
    mission:[]
}, action) => {
    switch (action.type){
        case FETCHDATA:
            return{
                ...state,
                mission: action.payload
            }
        default:
            return state;
    }
}