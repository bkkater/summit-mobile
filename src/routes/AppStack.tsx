import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../pages/Chat';
import { NavigationContainer } from '@react-navigation/native';

import MenuTabs from './MenuTabs'
import AppLoading from '../pages/AppLoading';

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>              
                <Screen name='MenuTabs' component={MenuTabs} />
                <Screen name='Chat' component={Chat} />
                <Screen name='AppLoading' component={AppLoading} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;