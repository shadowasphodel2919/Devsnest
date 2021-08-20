import counterReducer from "./counterReducer";
import changeUsername from "./changeUsername";
import changeEmail from "./changeEmail";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    changeUsername: changeUsername,
    changeEmail: changeEmail,
});

export default rootReducer;