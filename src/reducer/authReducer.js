import {isEmpty} from "../utils/isEmpty";

const initalState = {
    isAuthenticated:false
};

export default function (state=initalState,action) {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                ...action.payload
            };

        default:
            return state
    }
}