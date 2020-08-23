import React from 'react';
import { View, Text } from 'react-native';

import LandingHeader from '../../components/LandingHeader';
import Field from '../../components/Field'
import { RectButton } from 'react-native-gesture-handler';

import style from './styles'
import { useNavigation } from '@react-navigation/native';

function CreateAccount() {
    const { navigate } = useNavigation();

    function handleNavigateToNext() {
        navigate('MenuTabs')
    }
    return (
        <View>
            <LandingHeader/>

            <Field placeholder='Seu login'></Field>
            <Field placeholder='Senha'></Field>

            <RectButton style={style.button} onPress={handleNavigateToNext}>
                    <Text style={style.buttonText}>Entrar na minha conta</Text>
            </RectButton>

        </View>
    );
}

export default CreateAccount;