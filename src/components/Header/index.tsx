import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

import goBack from '../../assets/goBack.png'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    icon: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, icon}) => {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('Messages')
    }

    if(icon) {
        return (
            <View style={styles.header}>
                <BorderlessButton onPress={handleNavigateToBack}>
                    <Image source={goBack} style={styles.image}></Image>
                </BorderlessButton>
                <Text style={styles.textHeader}>{title}</Text>
            </View>
        )
    }
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    )
}

export default Header;