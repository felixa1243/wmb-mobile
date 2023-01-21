import {Card} from "../../../shared/components/Index";
import style from "./style";
import {Text, View} from "react-native";
export const ListItem = (props)=>{
    const {item} = props.data
    return (
        <Card styles={style.container}>
            <View>
                <Text>{item?.nama}</Text>
                <Text>{item?.email}</Text>
                <Text>{item?.alamat}</Text>
            </View>
        </Card>
    )
}