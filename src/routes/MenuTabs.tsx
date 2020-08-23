import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Messages from '../pages/Messages';
import Post from '../pages/Post';
import Profile from '../pages/Profile';
import Wallet from '../pages/Wallet';

import homeIcon from '../assets/home-icon.png'
import messageIcon from '../assets/message-icon.png'
import postIcon from '../assets/post-icon.png'
import profileIcon from '../assets/profile-icon.png'
import walletIcon from '../assets/wallet.png'



const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 75,
                    },
                    tabStyle: {
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    labelStyle: {
                        fontFamily: 'Ubuntu_700Bold',
                        fontSize: 11,
                        marginBottom: 20
                    },
                    inactiveBackgroundColor: '#FAFAFC',
                    activeBackgroundColor: '#e0dcdc',
                    inactiveTintColor: '#C1BCCC',
                    activeTintColor: '#959595'
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Meu Negócio',
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                                <Image source={homeIcon}></Image>
                            );
                        }
                    }} />
                <Tab.Screen
                    name="Messages"
                    component={Messages}
                    options={{
                        tabBarLabel: 'Mensagens',
                        tabBarIcon: () => {
                            return (
                                <Image source={messageIcon}></Image>
                            );
                        }
                    }} />
                <Tab.Screen
                    name="Post"
                    component={Post}
                    options={{
                        tabBarLabel: 'Postar',
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                                <Image source={postIcon}></Image>
                            );
                        }
                    }} />
                <Tab.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{
                        tabBarLabel: 'Carteira',
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                                <Image source={walletIcon}></Image>
                            );
                        }
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ color, size, focused }) => {
                            return (
                                <Image source={profileIcon}></Image>
                            );
                        }
                    }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}