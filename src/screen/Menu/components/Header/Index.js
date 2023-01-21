import {Text, View} from "react-native";

const RenderHeader = (item) => (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text style={{fontFamily:'Poppins',fontSize:18}}>{item.title}</Text>
    </View>
)
export default RenderHeader