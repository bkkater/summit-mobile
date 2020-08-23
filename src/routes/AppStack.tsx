import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../pages/Chat';
import { NavigationContainer } from '@react-navigation/native';

import MenuTabs from './MenuTabs'

const { Screen, Navigator } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>              
                <Screen name='MenuTabs' component={MenuTabs} />
                <Screen name='Chat' component={Chat} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;