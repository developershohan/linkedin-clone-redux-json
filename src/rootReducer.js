import {combineReducers} from "redux"
import LinkedinPostReducer from "./redux/linkedinPostReducer"

const rootReducer = combineReducers({
    linkedinPost: LinkedinPostReducer
})
export default rootReducer