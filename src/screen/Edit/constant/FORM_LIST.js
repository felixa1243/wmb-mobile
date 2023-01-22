import {ACTION_TYPE} from "./ACTION_TYPE";

export const FORM_LIST = [
    {
        placeholder: 'id',
        action: ACTION_TYPE.CHANGE_ID
    },
    {
        placeholder: 'Edit menu name',
        action: ACTION_TYPE.CHANGE_NAME,
        name:'name'
    }, {
        placeholder: 'Edit menu price',
        action: ACTION_TYPE.CHANGE_PRICE,
        name: 'price'
    }
]