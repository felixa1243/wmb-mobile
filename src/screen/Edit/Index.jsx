import {Text, View} from "react-native";
import {Button, Icon, InputGroup, Toast} from "../../shared/components/Index";
import style from "./style";
import {ACTION_TYPE} from "./constant/ACTION_TYPE";
import {useEffect, useReducer, useState} from "react";
import {reducer, state} from "./constant/Reducer";
import useFetch from "../../app/hooks/useFetch";
import {editMenu, getMenuById} from "../../app/service/MenuService";
import {FORM_LIST} from "./constant/FORM_LIST";
import useFetchMutation from "../../app/hooks/useFetchMutation";

const SuccessToast = (props) => {
    return (
        <Toast variants={"success"}
               active={props.active}
               close={props.close}
        >
            <View style={{flexDirection: "row"}}>
                <Icon name={"checkmark-circle-outline"} color={"white"}/><Text
                style={{color: "white", marginLeft: 10}}>{props.text}</Text>
            </View>
        </Toast>
    )
}

const Edit = (props) => {
    const {id} = props?.route.params
    const [menuProp, dispatcher] = useReducer(reducer, state)
    const [data, error, loading] = useFetch(getMenuById(id))
    const [toastActive,setToastActive] = useState(false)
    useEffect(() => {
        dispatcher({type: ACTION_TYPE.CHANGE_ID, payload: data?.id})
        dispatcher({type: ACTION_TYPE.CHANGE_NAME, payload: data?.name})
        dispatcher({type: ACTION_TYPE.CHANGE_PRICE, payload: data?.price})
    }, [data])
    const [editErr, editLoading, mutation] = useFetchMutation(editMenu, () => {
        setToastActive(true)
        setTimeout(()=>props.navigation.navigate('Menu'),500)
    })
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
                            mutation(editMenu(id))
                        }}
                ><Text style={style.textBtn}>Edit menu</Text></Button>
            </View>
            <SuccessToast active={toastActive}
                          close={() => setToastActive(false)}
                          text={"Success edit item"}
            />
        </View>
    )
}
export default Edit