import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "../TabNavigation";
import {Edit} from "../../screen/Index";

const Stack = createStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            disableBackButtonMenu: true
        }}>
            <Stack.Screen
                name={'Home'}
                component={TabNavigation}
            />
            <Stack.Screen
                name={'edit'}
                component={Edit}/>
        </Stack.Navigator>
    )
}
export default HomeStack