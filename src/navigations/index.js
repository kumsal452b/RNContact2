import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuhNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

export default class AppNavContainer extends React.Component{
    private
    render(){
        return (
            <NavigationContainer>
              {isLogin ? <DrawerNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          );
    }
};
