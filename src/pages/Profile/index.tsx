import React from 'react';
import { View, Image, Text } from 'react-native';

import style from './styles'
import Header from '../../components/Header';

import profileImage from '../../assets/profile-picture.png';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import image1 from '../../assets/feed/1.png'
import image2 from '../../assets/feed/2.png'
import image3 from '../../assets/feed/3.png'
import image4 from '../../assets/feed/4.png'
import image5 from '../../assets/feed/5.png'
import image6 from '../../assets/feed/6.png'
import image7 from '../../assets/feed/7.png'
import image8 from '../../assets/feed/8.png'
import image9 from '../../assets/feed/9.png'

function Profile() {
  return (
    <View>
      <ScrollView>
      <Header title='Perfil' icon={false}/>

      <View style={style.profileDescription}>
        <Image source={profileImage} />
        <View style={style.profileName}>
          <Text style={style.profileNameText}>Malu Bolos</Text>
          <Text style={style.profileNick}>@bolos.malu</Text>
          <RectButton style={style.profileType}>
            <Text style={style.profileTypeText}>Doceria</Text>
          </RectButton>
        </View>
      </View>

      <Text style={style.bio}>Bolos caseiros sob encomenda. Aqui fazemos com muito amor para deixar sua festa mais feliz.</Text>

      <Text style={style.hashtag}>#abacaxi    #brigadeiro    #bolodefestas</Text>

      
        <View style={style.imageGroup}>
          <Image source={image1} style={style.image}></Image>
          <Image source={image2} style={style.image} ></Image>
          <Image source={image3} style={style.image} ></Image>
        </View>

        <View style={style.difImageGroup}>
          <Image source={image4} style={style.image}></Image>
          <Image source={image5} style={style.image}></Image>
          <Image source={image6} style={style.image}></Image>
        </View>

        <View style={style.difImageGroup}>
          <Image source={image7} style={style.image}></Image>
          <Image source={image8} style={style.image}></Image>
          <Image source={image9} style={style.image}></Image>
        </View>
      </ScrollView>
    </View>

  )
}

export default Profile;