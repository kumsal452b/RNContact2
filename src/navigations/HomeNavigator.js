import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Contact = () => {
    return (
        <View>
            <Text>Contact</Text>
        </View>
    );
}
const ContactDetail = () => {
    return (
        <View>
            <Text>ContactDetail</Text>
        </View>
    );
}



const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={'Contact'}>
            <HomeStack.Screen name="Contact" component={Contact} />
            <HomeStack.Screen name="ContactDetail" component={ContactDetail} />
        </HomeStack.Navigator>
    )
}
export default HomeNavigator;