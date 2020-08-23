import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../pages/Chat';
import { NavigationContainer } from '@react-navigation/native';

import MenuTabs from './MenuTabs'
import AppLoading from '../pages/AppLoading';
import LandingPage from '../pages/LandingPage';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import Name from '../pages/CreateAccount/Name';
import Company from '../pages/CreateAccount/Company';


const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}> 
                <Screen name='LandingPage' component={LandingPage}></Screen>   
                <Screen name='Login' component={Login}></Screen>   

                <Screen name='CreateAccount' component={CreateAccount}></Screen> 
                <Screen name='Name' component={Name}></Screen>   
                <Screen name='Company' component={Company}></Screen>   

                <Screen name='MenuTabs' component={MenuTabs} />
                <Screen name='Chat' component={Chat} />
                <Screen name='AppLoading' component={AppLoading} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;