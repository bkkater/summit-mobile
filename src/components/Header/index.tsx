import React, { ReactNode, Props } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles'

import goBack from '../../assets/goBack.png'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    icon: boolean;
    description?: string; 
    goBackPage?:string
}

const Header: React.FC<HeaderProps> = ({ title, icon, description, children}) => {
    const { navigate } = useNavigation();

    function handleNavigateToBack() {
        navigate('goBackPage')
    }

    if(icon) {
        return (
            <View style={styles.header}>
                <BorderlessButton onPress={handleNavigateToBack}>
                    <Image source={goBack} style={styles.image}></Image>
                </BorderlessButton>
                {children}
                <Text style={styles.textHeader}>{title}</Text>
                <Text style={styles.textDescription}>{description}</Text> 
            </View>
        )
    }
    return (
        <View style={styles.header}>
            {children}
            <Text style={styles.textHeader}>{title}</Text>
            <Text style={styles.textDescription}>{description}</Text>
        </View>
    )
}

export default Header;