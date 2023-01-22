import {deleteMenu, getMenu} from "../../app/service/MenuService";
import ListItem from "./components/ListItem/Index";
import {ListComponent} from "../../shared/components/ListComponent/Index";

const Menu = (props) => {
    return (
        <ListComponent
            service={getMenu}
            deleteService={deleteMenu}
            renderItem={ListItem}
            by={'name'}
            isIndexed={true}
            {...props}
        />
    )
}
export default Menu