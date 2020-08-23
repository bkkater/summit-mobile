import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import style from './styles';
import LandingHeader from '../../components/LandingHeader';

import message from '../../assets/message-icon.png'
import { useNavigation } from '@react-navigation/native';

function LandingPage() {
    const { navigate } = useNavigation();

    function handleNavigateToAccount() {
        navigate('Login')
    }

    function handleNavigateToCreateAccount(){
        navigate('CreateAccount')
    }
    return (
        <View style={style.container}>
            <LandingHeader />

            <View style={style.buttonGroup}>
                <RectButton style={style.button} onPress={handleNavigateToAccount}>
                    <Text style={style.buttonText}>Entrar na minha conta</Text>
                </RectButton>

                <RectButton style={style.difButton} onPress={handleNavigateToCreateAccount}>
                    <Text style={style.difButtonText}>Criar conta Pequenos Negócios</Text>
                </RectButton>

                <Text style={style.versionText}>Versão 1.0.0</Text>
                <Image style={style.icon} source={message}></Image>

            </View>
        </View>
    );
}

export default LandingPage;