import React from 'react';
import { View, Image } from 'react-native';

import style from './styles'

import logoImage from '../../assets/app-title.png'
import textoImage from '../../assets/app-name.png'


function AppLoading() {
    return (
        <View style={style.container}>
            <Image source={logoImage}></Image>
            <Image source={textoImage}></Image>
        </View>
    );
}

export default AppLoading;