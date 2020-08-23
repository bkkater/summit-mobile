import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './styles'

import messageRoute from '../../assets/message-route.png'

interface MessageProps {
    name: string;
    messageContent: string
}

const Message: React.FC<MessageProps> = ({ name, messageContent }) => {
    return (
        <View>
            <View style={style.message}>
                <View style={style.messageHeader}>
                    <Text style={style.messageText}>{name}</Text>
                    <Image source={messageRoute} />
                </View>

                <View style={style.messageContent}>
                    <Text>{messageContent}</Text>
                </View>

            </View>
            <View style={style.hr}></View>
        </View>
    )
}

export default Message;