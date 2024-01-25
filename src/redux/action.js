import axios from "axios"
import { ADD_POST_FULFILLED, ADD_POST_PENDING, ADD_POST_REJECTED, DELETE_POST_FULFILLED, DELETE_POST_PENDING, DELETE_POST_REJECTED, GET_POST_FULFILLED, GET_POST_PENDING, GET_POST_REJECTED, UPDATE_POST_FULFILLED, UPDATE_POST_PENDING, UPDATE_POST_REJECTED } from "./actionType"

export const get_linkedinPost = () => async (dispatch) => {
    try {
        dispatch({ type: GET_POST_PENDING })
        const res = await axios.get("http://localhost:6060/linkedinPost")

        dispatch({ type: GET_POST_FULFILLED, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_POST_REJECTED })
    }
}

// add linkedinPost
export const add_inkedinPost = (data)=>async(dispactch)=>{

    try {
        dispactch({type: ADD_POST_PENDING})
        await axios.post("http://localhost:6060/linkedinPost",data)
        dispactch({type: ADD_POST_FULFILLED, payload:data})
        dispactch(get_linkedinPost())
    } catch (error) {
        dispactch({type:ADD_POST_REJECTED})
    }

}


export const delete_inkedinPost = (id) => async(dispactch)=>{
try {
    dispactch({type:DELETE_POST_PENDING})

    await axios.delete(`http://localhost:6060/linkedinPost/${id}`,id)
    dispactch({type:DELETE_POST_FULFILLED,payload: id})
    dispactch(get_linkedinPost())

} catch (error) {
    dispactch({type:DELETE_POST_REJECTED})
}
}
export const update_linkedin = (data) =>async(dispatch)=>{
try {
    dispatch({type: UPDATE_POST_PENDING})

    await axios.patch(`http://localhost:6060/linkedinPost/${data.id}`, data)
    dispatch({type: UPDATE_POST_FULFILLED})
    
} catch (error) {
    dispatch({type:UPDATE_POST_REJECTED})
}
}