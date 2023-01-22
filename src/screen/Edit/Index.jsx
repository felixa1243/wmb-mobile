import {Text, View} from "react-native";
import {Button, Input} from "../../shared/components/Index";
import style from "./style";
import InputGroup from "./components/InputGroup/Index";
import {ACTION_TYPE} from "./constant/ACTION_TYPE";
import {useEffect, useReducer} from "react";
import {reducer, state} from "./constant/Reducer";
import useFetch from "../../app/hooks/useFetch";
import {editMenu, getMenuById} from "../../app/service/MenuService";
import {FORM_LIST} from "./constant/FORM_LIST";
import useFetchMutation from "../../app/hooks/useFetchMutation";

const Edit = (props) => {
    const {id} = props?.route.params
    const [menuProp, dispatcher] = useReducer(reducer, state)
    const [data, error, loading] = useFetch(getMenuById(id))
    useEffect(() => {
        dispatcher({type: ACTION_TYPE.CHANGE_ID, payload: data?.id})
        dispatcher({type: ACTION_TYPE.CHANGE_NAME, payload: data?.name})
        dispatcher({type: ACTION_TYPE.CHANGE_PRICE, payload: data?.price})
    }, [data])
    const [editErr, editLoading, mutation] = useFetchMutation(editMenu, () => {
        console.log('Edit success')
        props.navigation.navigate('Menu')
    })
    console.log(data)
    return (
        <View style={style.container}>
            {
                FORM_LIST.map((item, index) => {
                    return (
                        <View style={{width: '100%'}} key={index}>
                            <InputGroup
                                placeholder={item.placeholder}
                                onChange={text => dispatcher({type: item.action, payload: text})}
                                editable={index !== 0}
                                value={index === 0 ? menuProp.id : menuProp[item.name]}
                            />
                        </View>
                    )
                })
            }
            <View style={{flexDirection: 'row'}}>
                <Button styles={style['btn-cancel']}
                        onPress={() => props.navigation.navigate("Menu")}
                ><Text style={style.textBtn}>Cancel</Text></Button>
                <Button styles={style['btn-edit']}
                        onPress={() => {
                            mutation(editMenu())
                        }}
                ><Text style={style.textBtn}>Edit menu</Text></Button>
            </View>
        </View>
    )
}
export default Edit