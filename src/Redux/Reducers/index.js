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

let defaultSearch = (iniState = [], action) => {
    switch (action.type) {
        case "SEARCH": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
};

let metaData = (iniState = {}, action) => {
    switch (action.type) {
        case "METADATA": {
            return action.payload;
        }
        default: {
            return iniState;
        }
    }
};

let allReducers = combineReducers({
    authToken,defaultSearch,metaData
});

export default allReducers;