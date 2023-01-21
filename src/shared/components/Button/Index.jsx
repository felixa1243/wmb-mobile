import {Pressable} from "react-native";
import style from "./style";

const Button = (props) => {
    const {children} = props
    return (
        <Pressable style={[style.btn, {...props.styles}]} {...props}>
            {children}
        </Pressable>
    )
}
export default Button