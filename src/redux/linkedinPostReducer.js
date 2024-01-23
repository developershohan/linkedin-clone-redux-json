
import { GET_POST_FULFILLED, GET_POST_PENDING, GET_POST_REJECTED } from "./actionType";
import { initialState } from "./initialState";

const LinkedinPostReducer =(state = initialState,action)=>{

    switch (action.type) {

    case GET_POST_PENDING:
        return{
            ...state,
            loading: true
        }
    case GET_POST_FULFILLED:
        return{
            ...state,
            loading: false,
            message: "Post GET successfully",
            linkedinPost : [...state.linkedinPost, action.payload]
        }
    case GET_POST_REJECTED:
        return{
            ...state,
            loading: false,
            error: "Post rejected"
        }
            
        default:
            return state;
    }

}
export default LinkedinPostReducer