import { combineReducers } from "redux";

let authToken = (iniState = '', action) => {
    switch (action.type) {
        case "AUTHTOKEN": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
};

let allReducers = combineReducers({
    authToken
});

export default allReducers;