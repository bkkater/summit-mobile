import React from 'react';
import { View } from 'react-native';

import style from './styles'
import Header from '../../components/Header';

function Profile(){
  return (
    <View>
      <Header title='Perfil' />

      <View style={style.profileDescription}></View>
    </View>
  )
}

export default Profile;