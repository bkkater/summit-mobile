import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FF2D55',
        margin: 20,
        borderRadius: 12,
        padding: 15
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    cardHeaderText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        marginRight: 15,
        textDecorationLine: "underline"
    },
    cardNumber: {
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 26,
        lineHeight: 28,
        marginLeft: 12
    },
    cardName: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 22,
        lineHeight: 40,
        marginLeft: 12,
        paddingTop: 5,
        paddingBottom: 5
    },
    cardFooter: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingBottom: 15
    },
    cardExpirionDate: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        marginLeft: 12,
        fontSize: 20,

    },
    options: {
        flexDirection: 'row'
    },
    option: {
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        marginTop: 5,
        marginRight: 5    
    },
    optionText: {
        fontSize: 13,
        lineHeight: 18,
        fontFamily: 'Ubuntu_400Regular',
        color: '#959595',
        marginTop: 5
    }
})

export default styles;