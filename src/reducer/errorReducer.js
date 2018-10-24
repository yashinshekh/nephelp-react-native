const initalState = {};

export default function (state=initalState,action) {
    console.log(action.payload);
    switch (action.type) {
        case "ERROR_DATA":
            return action.payload;
        default:
            return state
    }
}