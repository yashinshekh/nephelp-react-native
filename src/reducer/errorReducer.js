const initalState = {};

export default function (state=initalState,action) {
    switch (action.type) {
        case "ERROR_DATA":
            return action.payload;
        default:
            return state
    }
}