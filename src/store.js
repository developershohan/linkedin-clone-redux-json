import {createStore, applyMiddleware } from "redux"
import rootReducer from "./rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import {thunk} from "redux-thunk"

const middleWare = [thunk]

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export default store