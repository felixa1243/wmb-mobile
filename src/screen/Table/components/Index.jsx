import {Text} from "react-native";
import {Card} from "../../../shared/components/Index";

const ListItem = (props) => {
    return (
            <Card styles={{paddingHorizontal:7, paddingVertical: 5, borderRadius: 10}}>
                <Text>{props.nomor}</Text>
            </Card>
    )
}
export default ListItem