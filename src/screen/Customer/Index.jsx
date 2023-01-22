import {ListComponent} from "../../shared/components/ListComponent/Index";
import {deleteCustomer, getCustomer} from "../../app/service/customerService";
import {ListItem} from "./components/ListItem";

const Customer = (props) => {
    return (
        <ListComponent
            service={getCustomer}
            deleteService={deleteCustomer}
            renderItem={ListItem}
            by={'nama'}
            isIndexed={true}
            {...props}
        />
    )
}
export default Customer