import React from 'react';
import { View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { ScrollView, TextInput, BorderlessButton } from 'react-native-gesture-handler';

import style from './styles'
import Header from '../../components/Header';

import userChat from '../../assets/user-chat.png';
import sendFile from '../../assets/file.png';
import send from '../../assets/send.png';
import goBack from '../../assets/goBack.png'
import { useNavigation } from '@react-navigation/native';

function Chat() {
  const { navigate } = useNavigation();

  function handleNavigateToBack() {
    navigate('Messages')
  }
  return (
    <View>
      <ScrollView>
        <Header title='Maria Cecília' icon={false}>

          <BorderlessButton onPress={handleNavigateToBack}>
            <Image source={goBack} style={style.image}></Image>
          </BorderlessButton>
        </Header>


        <View style={style.content}>

          <Text style={style.date}>20 de Agosto de 2020</Text>

          <View style={style.boxMessage}>
            <Image source={userChat} />
            <Text style={style.messageText}>Olá, boa tarde. Me interessei pelo bolo de cenoura, como posso pagar e realizar a retirada?</Text>
            <Text style={style.messageDescription}>Entrando em contato pelo anúncio <Text style={style.messageLink}>Bolo de Cenoura</Text></Text>

            <Text style={style.time}>15:47</Text>

          </View>

          <View style={style.hr}></View>

          <View style={style.boxMessage}>
            <Text>Você:</Text>
            <Text style={style.messageText}>Boa tarde. Que bom que se interessou por nossos produtos</Text>
            <Text style={style.messageText}>Você vai gostar bastante!</Text>
            <Text style={style.lastMessageText}>Me diga onde você mora aproximadamente, pode ser bom você vir aqui e provar talvez</Text>

            <Text style={style.time}>16:04</Text>

          </View>

          <View style={style.hr}></View>
        </View>
        <View style={style.boxMessage}>
          <Image source={userChat}></Image>
          <Text style={style.messageText}>Eu adodoraria então</Text>
          <Text style={style.lastMessageText}>Vamos Combinar sim!</Text>

          <Text style={style.time}>16:10</Text>
        </View>
      </ScrollView>

      <KeyboardAvoidingView contentContainerStyle={style.box} behavior="position" enabled>

        <View style={style.textInput}>
          <View style={style.textInputContent}>
            <View style={style.textInputContent}>
              <Image source={sendFile} />
              <TextInput
                placeholder="Digite uma mensagem"
                placeholderTextColor='#C1BCCC'
                style={style.textInput}
              />
            </View>
            <Image style={style.send} source={send} />
          </View>

          <View style={style.field}></View>
        </View>
      </KeyboardAvoidingView>
    </View >
  )
}

export default Chat;