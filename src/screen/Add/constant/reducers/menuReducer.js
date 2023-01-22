import {ACTION_TYPE} from "../ACTION_TYPE";

export const MenuState = {
    name: '',
    price: 0
}
export const menuReducer = (state = MenuState, action) => {
    switch (action.type) {
        case ACTION_TYPE.menu.CHANGE_MENU_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ACTION_TYPE.menu.CHANGE_PRICE:
            return {
                ...state,
                price: action.payload
            }
        default:
            return state
    }
}