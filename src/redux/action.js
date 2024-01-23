import axios from "axios"
import { GET_POST_FULFILLED, GET_POST_PENDING, GET_POST_REJECTED } from "./actionType"

export const get_linkedinPost = () => async (dispatch) => {
    try {
        dispatch({ type: GET_POST_PENDING })
        const res = await axios.get("http://localhost:6060/linkedinPost")

        dispatch({ type: GET_POST_FULFILLED, payload: res.data })
    } catch (error) {
        dispatch({ type: GET_POST_REJECTED })
    }
}