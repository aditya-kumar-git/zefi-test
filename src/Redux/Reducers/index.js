import { combineReducers } from "redux";

let tempTest = (iniState = 'Working', action) => {
    switch (action.type) {
        case "TEMPPRIMARY": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
};

let allReducers = combineReducers({
    tempTest
});

export default allReducers;