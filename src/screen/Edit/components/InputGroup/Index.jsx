import {View} from "react-native";
import style from "./style";
import {Input} from "../../../../shared/components/Index";

const InputGroup = (props) => {
    return (
        <View style={style.container}>
            <Input
                placeholder={props.placeholder}
                onChangeText={props.onChange}
                {...props}
            />
        </View>
    )
}
export default InputGroup