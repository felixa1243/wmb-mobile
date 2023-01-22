import {ACTION_TYPE} from "../ACTION_TYPE";

export const CustomerState = {
    nama: '',
    email: '',
    alamat: ''
}
export const customerReducer = (state = CustomerState, action) => {
    switch (action.type) {
        case ACTION_TYPE.customer.CHANGE_CUSTOMER_NAME:
            return {
                ...state,
                nama: action.payload
            }
        case ACTION_TYPE.customer.CHANGE_CUSTOMER_ADDRESS:
            return {
                ...state,
                alamat: action.payload
            }
        case ACTION_TYPE.customer.CHANGE_CUSTOMER_EMAIL:
            return {
                ...state,
                email: action.payload
            }
    }
}