import {Text} from "react-native";
import {Card} from '../../../../shared/components/Index'

const ListItem = (props) => {
    return (
        <Card styles={{paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10}}>
            <Text>{props.item?.name}</Text>
        </Card>
    )
}
export default ListItem