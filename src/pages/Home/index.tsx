import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import retangleIcon from '../../assets/retangle.png';
import difRetangleIcon from '../../assets/dif-retangle.png';

import arrowIcon from '../../assets/down-arrow.png';
import finished from '../../assets/finished.png';
import manegeBusness from '../../assets/manage-busness.png';

import Header from '../../components/Header'

function Home() {
    return (
        <View>
            <Header title="Meu Negócio" icon={false}/>

            <View style={styles.card}>
                <Text style={styles.suggestionText}>O item Bolo de brigadeiro tem recebido muitas visitas, que tal investir no cashback desse produto?</Text>
                <Text style={styles.suggestion}>Sugestão AME!</Text>
            </View>

            <Text style={styles.transationText}>Suas transações</Text>

            <View style={styles.transitionContent}>
                <View style={styles.transitionCard}>
                    <Image source={retangleIcon} />
                    <View style={styles.transitionInformation}>
                        <Text style={styles.transitionName}>Recebeu de Maria - Bolo de Abacaxi</Text>
                        <Text style={styles.transitionPrice}>R$ 150,00</Text>
                    </View>
                </View>

                <View style={styles.transitionCard}>
                    <Image source={difRetangleIcon} />
                    <View style={styles.transitionInformation}>
                        <Text style={styles.transitionName}>Pagou João - Pacote Festa</Text>
                        <Text style={styles.transitionRedPrice}>R$ 150,00</Text>
                    </View>
                </View>

                <View style={styles.transitionCard}>
                    <Image source={retangleIcon} />
                    <View style={styles.transitionInformation}>
                        <Text style={styles.transitionName}>Solicitou retirada</Text>
                        <Text style={styles.transitionPrice}>R$ 150,00</Text>
                    </View>
                </View>

                <View style={styles.transitionCard}>
                    <Image source={retangleIcon} />
                    <View style={styles.transitionInformation}>
                        <Text style={styles.transitionName}>Recebeu de Joana - Bolo e salgados</Text>
                        <Text style={styles.transitionPrice}>R$ 150,00</Text>
                    </View>
                </View>

                <View style={styles.expand}>
                    <View style={styles.expandContent}>
                        <Text style={styles.expandText}>expandir</Text>
                        <Image source={arrowIcon}></Image>
                    </View>
                </View>
            </View>

            <View style={styles.options}>
                <View style={styles.option}>
                    <Image source={finished} />
                    <Text style={styles.optionText}>Negócios Fechados</Text>
                </View>

                <View style={styles.option}>
                    <Image source={manegeBusness} />
                    <Text style={styles.optionText}>Gestão do Negócio</Text>
                </View>
            </View>
        </View>
    );
}

export default Home;