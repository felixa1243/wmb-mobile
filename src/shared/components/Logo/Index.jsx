import {Text, View} from "react-native";
import {useFonts} from "expo-font";

const Logo = (props) => {
    const [isLoaded] = useFonts({
        'Great-Vibes': require('../../../../assets/fonts/Great_Vibes/GreatVibes-Regular.ttf'),
        'Poppins': require('../../../../assets/fonts/Poppins/Poppins-Regular.ttf')
    })
    if (!isLoaded) {
        return null
    }
    return (
        <View style={{alignItems: 'center', ...props.styles}}>
            <Text style={{fontFamily: 'Great-Vibes', fontSize: 32, color: 'white'}}>
                Wmb
            </Text>
            <Text style={{fontFamily: 'Poppins', color: 'white', fontSize: 18}}>
                Warung makan bersama
            </Text>
        </View>
    )
}
export default Logo