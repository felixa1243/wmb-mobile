import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {Home, Login} from "../../screen/Index";


const Stack = createStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}>
            <Stack.Screen name={"Login"} component={Login}/>
        </Stack.Navigator>
    )
}
export default AuthStack