import {FORM_LIST} from "../constant/FORM_LIST";
import Form from "../components/Form/Index";
import {TableReducer, TableState} from "../constant/reducers/TableReducer";
import {addTable} from "../../../app/service/TableService";

const AddTable = (props) =>{
    return (
        <Form
            reducer={TableReducer}
            state={TableState}
            addService={addTable}
            home={"Table"}
            formList={FORM_LIST.table}
            {...props}
        />
    )
}
export default AddTable