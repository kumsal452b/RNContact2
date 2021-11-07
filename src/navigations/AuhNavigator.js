import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text, View } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = () => {
    return (
        <View style={{ marginTop: 200, marginStart: 200 }}>
            <Text>Login</Text>
        </View>
    );
}
const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
        </View>
    );
}

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Contact" component={Login} />
            <AuthStack.Screen name="ContactDetail" component={SignUp} />
        </AuthStack.Navigator>
    );
}
export default AuthNavigator;