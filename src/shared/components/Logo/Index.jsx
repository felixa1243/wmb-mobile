import {Text, View} from "react-native";

const Logo = (props) => {
    return (
        <View style={{alignItems: 'center', ...props.styles}}>
            <Text style={{fontFamily: 'Great-Vibes', fontSize: 42, color: 'white'}}>
                Wmb
            </Text>
            <Text style={{fontFamily: 'Poppins', color: 'white', fontSize: 18}}>
                Warung makan bahari
            </Text>
        </View>
    )
}
export default Logo