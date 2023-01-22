import {Text, View} from "react-native";
import {Button, Icon, Toast} from "../../../../shared/components/Index";
import {useReducer, useState} from "react";
import useFetchMutation from "../../../../app/hooks/useFetchMutation";
import InputGroup from "../../../../shared/components/InputGroup/Index";
import style from "../../shared/style";

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
const Form = (props) => {
    const [dataProps, dispatch] = useReducer(props.reducer, props.state)
    const [addErr, , add] = useFetchMutation(props.addService, () => {
        setToastActive(true)
        setTimeout(() => props.navigation.navigate(props.home),500)
    })
    const [toastActive, setToastActive] = useState(false)
    return (
        <View style={style.container}>
            {
                props.formList.map((item, index) => {
                    return (
                            <InputGroup
                                placeholder={item.placeholder}
                                onChange={text => dispatch({type: item.actionType, payload: text})}
                                key={index}
                            />
                    )
                })
            }
            <View style={{flexDirection: 'row'}}>
                <Button styles={style["btn-cancel"]} onPress={()=>props.navigation.navigate(props.home)}>
                    <Text style={style.textBtn}>Cancel</Text>
                </Button>
                <Button
                    styles={style["btn-edit"]}
                    onPress={()=>{
                        add(props.addService({...dataProps}))
                    }}
                >
                    <Text style={style.textBtn}>Add</Text>
                </Button>
            </View>
            <SuccessToast active={toastActive}
                          close={() => setToastActive(false)}
                          text={"Add data success"}
            />
        </View>
    )
}
export default Form