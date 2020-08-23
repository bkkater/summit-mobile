import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import style from './styles'
import Header from '../../components/Header';
import Message from '../../components/Message';

function Messages() {

  return (
    <View>
      <ScrollView>
        <Header title="Mensagens" />
        <View style={style.alert}>
          <Text style={style.alertText}>Você tem novas mensagens!</Text>
        </View>

        <Message
          name='Maria Cecília - Bolo de cenoura'
          messageContent='Olá, boa tarde. Me interessei pelo bolo de cenoura, como posso pagar e realizar a retirada?'
        />

        <Message
          name='Renata Silva - Torta Prestígio'
          messageContent='Olá, bom dia. Poderia me confirmar o endereço de entrega?'
        />

        <Message
          name='João Carlos - Kit festa'
          messageContent='Quais outros sabores você tem disponível?'
        />

        <Message
          name='Eduardo Dias - Trufa de limão'
          messageContent='Quais outros sabores você tem disponível?'
        />

        <Message
          name='Roberta - Cookies'
          messageContent='Boa tarde. Adorei os cookies, nota 10!'
        />
      </ScrollView>
    </View>

  )
}

export default Messages;