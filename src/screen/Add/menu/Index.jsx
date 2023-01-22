import Form from "../components/Form/Index";
import {menuReducer, MenuState} from "../constant/reducers/menuReducer";
import {addMenu} from "../../../app/service/MenuService";
import {FORM_LIST} from "../constant/FORM_LIST";

const AddMenu = (props) => {
    return (
        <Form
            reducer={menuReducer}
            state={MenuState}
            addService={addMenu}
            home={"Menu"}
            formList={FORM_LIST.menu}
            {...props}
        />
    )
}
export default AddMenu