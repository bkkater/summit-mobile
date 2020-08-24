import React, { useState } from 'react';
import { View, Image, Text, Switch } from 'react-native';
import { BorderlessButton, TextInput, ScrollView, RectButton } from 'react-native-gesture-handler';

import style from './styles'
import Header from '../../components/Header';
import cake from '../../assets/cake.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const Post = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <ScrollView>
        <Header title='Nova Postagem' icon={false}></Header>



        <View style={style.imageBlock}>
          <Image source={cake} style={style.cake} />
        </View>

        <View style={style.fieldGroup}>
          <TextInput
            style={style.productName}
            placeholder='Nome do produto'
          />
          <TextInput
            style={style.productPrice}
            placeholder='Preço'
          />
        </View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Cashback</Text>

          <View style={style.sectionCashback}>
            <Text style={style.cashbackPercent}>1%</Text>

            <View style={style.percentInput}>
              <BorderlessButton><Text style={style.difInputText}>-</Text></BorderlessButton>
              <BorderlessButton><Text style={style.inputText}>+</Text></BorderlessButton>
            </View>
          </View>
        </View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Descrição</Text>

          <Text style={style.descriptionInput}>Compre através do aplicativo Ame e receba 20% de cashback.
          link.perfil/ame  @useamedigital #Ame #Cashback #Amepequenonegocio</Text>
        </View>

        <View style={style.hr}></View>

        <View style={style.section}>
          <Text style={style.sectionTitle}>Publicar também em:</Text>

          <View style={style.option}>
            <View style={style.optionDescription}>
              <Image source={facebook}></Image>
              <Text style={style.optionDescriptionText}>Facebook</Text>
            </View>
            <Switch
              trackColor={{ false: "#CECECE", true: "#FF2D55" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={!isEnabled}
            />
          </View>

          <View style={style.option}>
            <View style={style.optionDescription}>
              <Image source={instagram}></Image>
              <Text style={style.optionDescriptionText}>Instagram</Text>
            </View>
            <Switch
              trackColor={{ false: "#CECECE", true: "#FF2D55" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

        </View>

        <RectButton style={style.button}>
          <Text style={style.buttonText}>Postar</Text>
        </RectButton>
      </ScrollView>




    </View>
  )
}

export default Post;