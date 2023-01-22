import {Card, Icon} from "../../../shared/components/Index";
import style from "./style";
import {Text, TouchableOpacity, View} from "react-native";

export const ListItem = (props) => {
    const {item} = props.data
    let handleDelete = (id) => null;
    if (props.handleDelete) {
        handleDelete = props.handleDelete
    }
    return (
        <Card styles={style.container}>
            <View style={{flex: 1}}>
                <View>
                    <Text>{item?.nama}</Text>
                    <View style={{marginTop: 10}}>
                        <Text style={{color: '#949494'}}>{item?.email}</Text>
                        <Text style={{color: '#949494'}}>{item?.alamat}</Text>
                    </View>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row-reverse'}}>
                <TouchableOpacity onPress={handleDelete(item?.id)}>
                    <Icon name={'md-trash'} color={'red'} style={{marginTop: 15}}/>
                </TouchableOpacity>
            </View>
        </Card>
    )
}