import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Customer, Menu, Table} from "../screen/Index";
import {Icon} from '../shared/components/Index'

const TabNavigator = createBottomTabNavigator()

const TabNavigation = () => {
    const LIST_MENUS = [{
        name: 'Menu',
        title: 'Menu',
        component: Menu,
        focusIcon: 'md-home',
        icon: 'home-outline'
    }, {
        name: 'Customer',
        title: 'Customer',
        component: Customer,
        focusIcon: 'md-person',
        icon: 'person-outline'
    }, {
        name: 'Table',
        title: 'Table',
        component: Table,
        focusIcon: '',
        icon: ''
    }]
    return (
        <TabNavigator.Navigator>
            {
                LIST_MENUS
                    .map((item, index) => {
                        return (
                            <TabNavigator.Screen name={item.name}
                                                 component={item.component}
                                                 key={index}
                                                 options={
                                                     {
                                                         title: item.title,
                                                         tabBarStyle: {
                                                             borderRadius: 50,
                                                             marginBottom: 15,
                                                             marginHorizontal: 10,
                                                             height: 50,
                                                             paddingBottom: 5,
                                                             paddingTop: 5
                                                         },
                                                         tabBarIcon: ({focused}) => (
                                                             <Icon name={focused ? item.focusIcon : item.icon}
                                                                   color={focused ? '#fa1605' : 'black'}
                                                             />),
                                                         tabBarLabel: item.title,
                                                         headerShown: false,
                                                         tabBarActiveTintColor: '#fa1605'
                                                     }

                                                 }/>

                        )
                    })
            }
        </TabNavigator.Navigator>
    )
}
export default TabNavigation