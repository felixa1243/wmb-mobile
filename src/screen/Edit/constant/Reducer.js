import {ACTION_TYPE} from "./ACTION_TYPE";

export const state = {
    id: '',
    name: '',
    price: 0
}
export const reducer = (state = state, action) => {
    switch (action.type) {
        case ACTION_TYPE.CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ACTION_TYPE.CHANGE_PRICE:
            return {
                ...state,
                price: action.payload
            }
        case ACTION_TYPE.CHANGE_ID:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state
    }
}