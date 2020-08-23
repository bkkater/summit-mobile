import React from 'react';
import { View, Text } from 'react-native';

import Field from '../../components/Field'
import { RectButton } from 'react-native-gesture-handler';

import style from './styles'
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

function CreateAccount() {
    const { navigate } = useNavigation();

    function handleNavigateToNext() {
        navigate('Name')
    }
    return (
        <View>
            <Header icon={false} title='Vamos começar?' description='É rapidinho.'/>

            <View style={style.content}>

                <Field placeholder='Digite seu CPF ou CNPJ'></Field>

                <RectButton style={style.button} onPress={handleNavigateToNext}>
                    <Text style={style.buttonText}>Próximo</Text>
                </RectButton>
            </View>

        </View>
    );
}

export default CreateAccount;