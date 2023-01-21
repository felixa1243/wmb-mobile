import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import HomeStack from "./stack/HomeStack";
import AuthStack from "./stack/AuthStack";

const Stack = createStackNavigator()
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{...TransitionPresets.ModalTransition, headerShown: false}}>
                <Stack.Screen name={"Auth"} component={AuthStack}/>
                <Stack.Screen name={"HomeStack"} component={HomeStack}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation