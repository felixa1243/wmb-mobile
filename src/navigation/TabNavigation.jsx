import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Customer, Menu, Table} from "../screen/Index";
import {Icon} from '../shared/components/Index'
import {TransitionPresets} from "@react-navigation/stack";
import {options} from './TabsNavigationOption'
const TabNavigator = createBottomTabNavigator()

const TabNavigation = () => {
    const LIST_MENUS = [{
        name: 'Menu',
        title: 'Menu',
        component: Menu,
        focusIcon: 'fast-food'
    }, {
        name: 'Customer',
        title: 'Customer',
        component: Customer,
        focusIcon: 'md-person'
    }, {
        name: 'Table',
        title: 'Table',
        component: Table,
        focusIcon: 'md-list'
    }]
    return (
        <TabNavigator.Navigator screenOptions={{...TransitionPresets.ScaleFromCenterAndroid, headerShown: false}}>
            {
                LIST_MENUS
                    .map((item, index) => {
                        return (
                            <TabNavigator.Screen name={item.name}
                                                 component={item.component}
                                                 key={index}
                                                 options={
                                                     {
                                                         ...options,
                                                         title: item?.title,
                                                         tabBarIcon: ({focused}) => (
                                                             <Icon name={item?.focusIcon}
                                                                   color={focused ? 'white' : '#ab291c'}
                                                             />),
                                                         tabBarLabel: item.title
                                                     }
                                                 }/>

                        )
                    })
            }
        </TabNavigator.Navigator>
    )
}
export default TabNavigation