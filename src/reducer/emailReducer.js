const initalState = {};

export default function (state=initalState,action) {
    switch (action.type) {
        case 'EMAIL_NOTIFICATION':
            return action.payload
        default:
            return state
    }
}