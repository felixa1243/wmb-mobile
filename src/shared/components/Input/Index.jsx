import {TextInput} from "react-native";
import {useState} from "react";
import style from "./style";

const Input = (props) => {
    const [isFocus, setFocus] = useState(false)
    return (
        <TextInput style={[{...style.input, borderBottomWidth: isFocus ? 3 : 1}, {...props.styles}]}
                   onFocus={() => setFocus(true)}
                   onBlur={() => setFocus(false)}
                   {...props}
        />
    )
}
export default Input