import React from 'react';
import { View, Text, Image } from 'react-native';

import Field from '../../../components/Field'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import goBack from '../../../assets/goBack.png'

import style from './styles'
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';

function Company() {
    const { navigate } = useNavigation();

    function handleNavigateToNext() {
        navigate('MenuTabs')
    }

    function handleNavigateToBack() {
        navigate('Name')
    }
    return (
        <View>
            <Header icon={false} title='Maravilha!' description='Agora conte mais do seu negócio.'>
                <BorderlessButton onPress={handleNavigateToBack}>
                    <Image source={goBack} style={style.image}></Image>
                </BorderlessButton>
            </Header>

            <View style={style.content}>

                <Field placeholder='Digite o nome da empresa'></Field>
                <Field placeholder='Digite a categoria do negócio '></Field>


                <RectButton style={style.button} onPress={handleNavigateToNext}>
                    <Text style={style.buttonText}>Próximo</Text>
                </RectButton>
            </View>

        </View>
    );
}

export default Company;