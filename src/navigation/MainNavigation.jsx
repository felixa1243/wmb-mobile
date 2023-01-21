import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./stack/AuthStack";
import Login from "../screen/Login/Index";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {Home} from "../screen/Index";

const Stack = createStackNavigator()
const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{...TransitionPresets.ModalTransition, headerShown: false}}>
                <Stack.Screen name={"Auth"} component={Login}/>
                <Stack.Screen name={"Home"} component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigation