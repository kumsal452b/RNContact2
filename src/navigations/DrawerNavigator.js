
import React from "react"
import HomeNavigator from "./HomeNavigator";
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = () => {
    const DrawerStack = createDrawerNavigator();
    return (
        <DrawerStack.Navigator>
            <DrawerStack.Screen name="Home" component={HomeNavigator} />
        </DrawerStack.Navigator>
    )
}
export default DrawerNavigator;