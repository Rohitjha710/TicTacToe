import { FETCH_POST, NEW_POST } from "../actions/types";

const initialState = { items:[],
item:{} };
export default function(state=initialState,action){
    switch(action.type){
        case FETCH_POST:
            return{
                ...state,items:action.payload
            }
            case NEW_POST :
                let state1= {...state};
                state1.items.unshift(action.payload)
                return{
                    ...state1,item:action.payload
                }
    default : return state
    }
}