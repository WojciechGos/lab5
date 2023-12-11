import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, History, Profile} from "../views";
import {BottomTabIcon} from "../components/BottomTabIcon";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Add from '../views/Add/Add';
import List from '../views/List/List';

const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

const Drawer = createDrawerNavigator();



export default function TabNav() {
    return (

            <Drawer.Navigator>
                <Drawer.Screen name="List" component={List} initialParams={{name:"", price:'', amount:''}} />
                <Drawer.Screen name="Add" component={Add} />
            </Drawer.Navigator>

    );
}
// export default function TabNav() {
//     return (
//         <Tab.Navigator screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, }) => {

//                 return <BottomTabIcon routeName={route?.name} focused={focused} />;
//             }
//         })}>
//             <Tab.Screen name="Home" component={Home} options={optionScreen} />
//             <Tab.Screen name="History" component={History} options={optionScreen} />
//             <Tab.Screen name="Profile" component={Profile} options={optionScreen} />
//         </Tab.Navigator>
//     );
// }
