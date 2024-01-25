
import { ADD_POST_FULFILLED, ADD_POST_PENDING, ADD_POST_REJECTED, DELETE_POST_FULFILLED, DELETE_POST_PENDING, DELETE_POST_REJECTED, GET_POST_FULFILLED, GET_POST_PENDING, GET_POST_REJECTED, UPDATE_POST_FULFILLED, UPDATE_POST_PENDING, UPDATE_POST_REJECTED } from "./actionType";
import { initialState } from "./initialState";

const LinkedinPostReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_POST_PENDING:
            return {
                ...state,
                loading: true
            }
        case GET_POST_FULFILLED:
            return {
                ...state,
                loading: false,
                message: "Post GET successfully",
                linkedinPost: action.payload
            }
        case GET_POST_REJECTED:
            return {
                ...state,
                loading: false,
                error: "Post rejected"
            }

        case ADD_POST_PENDING:
            return {
                ...state,
                loading: true,
            }
        case ADD_POST_FULFILLED:
            return {
                ...state,
                loading: false,
                message: " post added ",
                linkedinPost: [...state.linkedinPost, action.payload]
            }
        case ADD_POST_REJECTED:
            return {
                ...state,
                loading: false,
                error: "Post rejected"
            }
        case DELETE_POST_PENDING:
            return {
                ...state,
                loading: true
            }
        case DELETE_POST_REJECTED:
            return {
                ...state,
                loading: false,
                error: "post deleted unsuccessful"
            }
        case DELETE_POST_FULFILLED:
            return {
                ...state,
                loading: false,
                message: "post deleted successfully",
                linkedinPost: state.linkedinPost.filter(data => data.id !== action.payload)
            }

        case UPDATE_POST_PENDING:
            return {
                ...state,
                loading: true
            }
            case UPDATE_POST_REJECTED:
                return {
                    ...state,
                    loading: false,
                    error: "post update unsuccessful"
                }
            case UPDATE_POST_FULFILLED:
                return{
                    ...state,
                    loading:false,
                    message: "post updated successfully",
                    linkedinPost: state.linkedinPost.map(item=>{
                        if (item.id === action.payload.id) {
                            action.payload
                        } else {
                            return item
                        }
                    })
                }

        default:
            return state;
    }

}
export default LinkedinPostReducer