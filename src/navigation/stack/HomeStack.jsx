import {createStackNavigator} from "@react-navigation/stack";
import TabNavigation from "../TabNavigation";
import {AddCustomer, AddMenu, AddTable, Edit} from "../../screen/Index";


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
            <Stack.Screen name={'Add Customer'} component={AddCustomer}/>
            <Stack.Screen name={'Add menu'} component={AddMenu}/>
            <Stack.Screen name={'Add Table'} component={AddTable}/>
        </Stack.Navigator>
    )
}
export default HomeStack