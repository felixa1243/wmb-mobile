import {customerReducer, CustomerState} from "../constant/reducers/customerReducer";
import {addCustomer} from "../../../app/service/customerService";
import {FORM_LIST} from "../constant/FORM_LIST";
import Form from "../components/Form/Index";

const AddCustomer = (props) => {
    return (
        <Form
            reducer={customerReducer}
            state={CustomerState}
            addService={addCustomer}
            home={"Menu"}
            formList={FORM_LIST.customer}
            {...props}
        />
    )
}
export default AddCustomer