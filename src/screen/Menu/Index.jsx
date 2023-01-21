import {AsyncListComponent} from "../../shared/components/Index";
import {getMenu} from "../../app/service/MenuService";
import ListItem from "./components/ListItem/Index";

const Menu = () => {
    return (
        <AsyncListComponent
            service={getMenu}
            renderItem={ListItem}
            by={'name'}
            isIndexed={true}
            header={'Menu'}
        />
    )
}
export default Menu