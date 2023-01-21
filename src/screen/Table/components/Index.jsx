import {Text} from "react-native";
import {Card} from "../../../shared/components/Index";

const ListItem = (props) => {
    return (
            <Card styles={{paddingHorizontal:7, paddingVertical: 5, borderRadius: 10,marginVertical:7,marginHorizontal:15}}>
                <Text style={{fontSize:16,marginBottom:10}}>{props.nomor}</Text>
                <Text style={{color:props.status !== "Available"?'red':'black'}}>{props.status}</Text>
            </Card>
    )
}
export default ListItem