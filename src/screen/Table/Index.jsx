import {AsyncListComponent} from "../../shared/components/Index";
import {getTable} from "../../app/service/TableService";
import ListItem from "./components/Index";

const Table = () => {
    return (
        <AsyncListComponent
            service={getTable}
            renderItem={ListItem}
            by={'nomor'}
            isIndexed={false}
            header={'Table'}
        />
    )
}
export default Table