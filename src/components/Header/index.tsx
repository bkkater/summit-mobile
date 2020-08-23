import React from 'react';
import { View, Text} from 'react-native';

import styles from './styles'

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>{title}</Text>

            {children}
        </View>
    )
}

export default Header;