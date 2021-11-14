import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import AuthNavigator from './AuhNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import {GlobalContext} from '../context/Provider';
interface IProps{

}
interface IState{
 loggedState:false;
}
export default class AppNavContainer extends React.Component<IProps,IState> {
  static contextType?: React.Context<any>=GlobalContext;
  constructor(prop:IProps){
    super(prop);
    this.state={
      loggedState:false
    }
  }
  
  private isLogin=true
  componentDidMount(){
      const {authState:{isLoggedIn}} =this.context;
      this.setState({loggedState:isLoggedIn})
  }
  render() {
    const isLogin = true;
    return (
      <NavigationContainer>
        {this.isLogin ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }
}
