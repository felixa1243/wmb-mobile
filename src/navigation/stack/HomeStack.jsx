import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "../../screen/Index";

const Stack = createStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            disableBackButtonMenu: true
        }}>
            <Stack.Screen
                name={'Home'}
                component={Home}
            />
        </Stack.Navigator>
    )
}
export default HomeStack