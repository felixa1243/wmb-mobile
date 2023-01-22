import {TouchableOpacity} from "react-native";
import style from "./style";

const Toast = (props) => {
    let backgroundColor;
    switch (props.variants.toLowerCase()) {
        case 'success':
            backgroundColor = '#4a934a'
            break;
    }
    if (props.active) {
        return (
            <TouchableOpacity
                style={{...style.container, backgroundColor}}
                onPress={props.close}
            >
                {props.children}
            </TouchableOpacity>
        )
    }
}
export default Toast