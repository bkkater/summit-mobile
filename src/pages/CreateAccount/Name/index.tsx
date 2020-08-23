import React from 'react';
import { View, Text, Image } from 'react-native';

import Field from '../../../components/Field'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import goBack from '../../../assets/goBack.png'

import style from './styles'
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';

function Name() {
    const { navigate } = useNavigation();

    function handleNavigateToNext() {
        navigate('Company')
    }

    function handleNavigateToBack() {
        navigate('CreateAccount')
    }

    return (
        <View>
            <Header icon={false} title='Vamos começar?' description='É rapidinho.'>
                <BorderlessButton onPress={handleNavigateToBack}>
                    <Image source={goBack} style={style.image}></Image>
                </BorderlessButton>
            </Header>

            <View style={style.content}>

                <Field placeholder='Digite seu nome'></Field>
                <Field placeholder='Digite sua data de nascimento'></Field>


                <RectButton style={style.button} onPress={handleNavigateToNext}>
                    <Text style={style.buttonText}>Próximo</Text>
                </RectButton>
            </View>

        </View>
    );
}

export default Name;