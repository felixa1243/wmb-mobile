import {TextInput} from "react-native";
import style from "./style";

const Input = (props) => {
    return (
        <TextInput style={[{...style.input}, {...props.styles}]}
                   {...props}
        />
    )
}
export default Input