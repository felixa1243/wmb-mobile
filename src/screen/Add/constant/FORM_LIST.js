import {ACTION_TYPE} from "./ACTION_TYPE";

export const FORM_LIST = {
    customer: [
        {
            placeholder: 'name',
            actionType: ACTION_TYPE.customer.CHANGE_CUSTOMER_NAME
        },
        {
            placeholder: 'email',
            actionType: ACTION_TYPE.customer.CHANGE_CUSTOMER_EMAIL
        }, {
            placeholder: 'address',
            actionType: ACTION_TYPE.customer.CHANGE_CUSTOMER_ADDRESS
        }
    ],
    menu: [
        {
            placeholder: 'name',
            actionType: ACTION_TYPE.menu.CHANGE_MENU_NAME
        },
        {
            placeholder: 'price',
            actionType: ACTION_TYPE.menu.CHANGE_PRICE
        }
    ],
    table: [
        {
            placeholder: 'table number',
            actionType: ACTION_TYPE.table.CHANGE_NUMBER
        }
    ]

}