import {Text} from "react-native";
import {Card} from "../../../shared/components/Index";

const ListItem = (props) => {
    return (
            <Card styles={{paddingHorizontal:7, paddingVertical: 5, borderRadius: 10,marginVertical:7,marginHorizontal:15,backgroundColor:props.status !== "Available" ? 'rgba(253,54,54,0.98)':'white'}}>
                <Text style={{fontSize:16,marginBottom:10}}>{props.nomor}</Text>
                <Text style={{color:props.status !== "Available"?'white':'black'}}>{props.status}</Text>
            </Card>
    )
}
export default ListItem