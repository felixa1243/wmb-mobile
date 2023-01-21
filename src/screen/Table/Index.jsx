import {getTable} from "../../app/service/TableService";
import ListItem from "./components/Index";
import {ListComponent} from "../../shared/components/ListComponent/Index";

const Table = (props) => {
    return (
        <ListComponent
            service={getTable}
            renderItem={ListItem}
            by={'nomor'}
            isIndexed={false}
            header={'Table'}
            {...props}
        />
    )
}
export default Table