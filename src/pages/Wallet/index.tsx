import React from 'react';
import { View, Image, Text } from 'react-native';

import style from './styles'
import Header from '../../components/Header'

import ameLogo from '../../assets/ame-card.png'
import mastercardLogo from '../../assets/mastercard.png'
import extratoIcon from '../../assets/extrato.png'
import transacoesIcon from '../../assets/transacoes.png'
import paymentsIcon from '../../assets/payments.png'




function Wallet() {
  return (
    <View>
      <Header title='Carteira' />

      <View style={style.card}>
        <View style={style.cardHeader}>
          <Image source={ameLogo}></Image>
          <Text style={style.cardHeaderText}>editar</Text>
        </View>

        <Text style={style.cardNumber}>1654 18** **** 7396</Text>
        <Text style={style.cardName}>Maria Luiza Bezerra</Text>

        <View style={style.cardFooter}>
          <Text style={style.cardExpirionDate}>02/2025</Text>
          <Image source={mastercardLogo}></Image>
        </View>
      </View>

      <View style={style.options}>
        <View style={style.option}>
          <Image source={extratoIcon} />
          <Text style={style.optionText}>Extrato</Text>
        </View>

        <View style={style.option}>
          <Image source={transacoesIcon} />
          <Text style={style.optionText}>Transações</Text>
        </View>
        <View style={style.option}>
          <Image source={paymentsIcon} />
          <Text style={style.optionText}>Pagamentos</Text>
        </View>
      </View>
    </View>
  )
}

export default Wallet;