import {Pressable, Text, View} from "react-native";
import {Card, Icon} from '../../../../shared/components/Index'
import style from "./style";

const ListItem = (props) => {
    let handleDelete = (id) => null;
    if(props.handleDelete){
        handleDelete = props.handleDelete
    }
    const icon = [{
        icon: 'md-create',
        color: 'green',
        action: () => props?.navigation.navigate('edit', {
            id: props.data?.item?.id
        })
    },
        {
            icon: 'md-trash',
            color: 'red',
            action: handleDelete(props.data?.item?.id)
        }
    ]
    return (
        <Card styles={style.container}>
            <View style={{width: '50%'}}>
                <Text>{props.data?.item?.name}</Text>
                <Text style={{fontFamily: 'Poppins', color: '#a2a2a2'}}>Rp.{props.data?.item?.price}</Text>
            </View>
            <View style={{width: '50%'}}>
                {
                    icon.map((item, index) => {
                        return (
                            <Pressable
                                onPress={item.action} key={index}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Icon name={item.icon} color={item.color}/>
                            </Pressable>
                        )
                    })
                }
            </View>
        </Card>
    )
}
export default ListItem