import {ACTION_TYPE} from "../ACTION_TYPE";

export const TableState = {
    id: '',
    nomor: ''
}
export const TableReducer = (state = TableState, action) => {
    switch (action.type) {
        case ACTION_TYPE.table.CHANGE_NUMBER:
            return {
                ...state,
                nomor: action.payload
            }
        case ACTION_TYPE.table.CHANGE_STATUS:
            return {
                ...state,
                nomor: action.payload
            }
        default:
            return state
    }
}