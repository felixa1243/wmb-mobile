import {NavigationContainer} from "@react-navigation/native";
import Login from "../screen/Login/Index";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import HomeStack from "./stack/HomeStack";

const Stack = createStackNavigator()
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{...TransitionPresets.ModalTransition, headerShown: false}}>
                <Stack.Screen name={"Auth"} component={Login}/>
                <Stack.Screen name={"HomeStack"} component={HomeStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation