import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import style from './styles'
import Header from '../../components/Header';
import goBack from '../../assets/goBack.png'
import cake from '../../assets/cake.png'


function Post() {
  const { navigate } = useNavigation();

  function handleNavigateToBack() {
    navigate('MenuTabs')
  }

  return (
    <View>
      <Header title='Nova Postagem' icon={false}>
        <BorderlessButton onPress={handleNavigateToBack}>
          <Image source={goBack} style={style.image}></Image>
        </BorderlessButton>
      </Header>

      <View style={style.imageBlock}>
        <Image source={cake} />
      </View>
    </View>
  )
}

export default Post;