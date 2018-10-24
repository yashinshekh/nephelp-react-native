const initalState = {};

export default function (state=initalState,action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return action.payload;

        default:
            return state
    }
}