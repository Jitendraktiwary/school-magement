import { combineReducers } from "redux";
import { jwtAuthreducer } from "./auth_reducer";

const reducers = combineReducers({
    jwtAuthreducer,
    
})

export default reducers;
