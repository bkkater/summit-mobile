import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        margin: 20,
        marginTop: 40
    },
    imageBlock: {
        height: 184,
        backgroundColor: '#fafafa'
    },
    cake: {
        marginTop: -1
    },
    fieldGroup: {
        flexDirection: 'row',
        margin: 20
    },
    productName: {
        width: 200,
        height: 44,
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        padding: 10
    },
    productPrice: {
        flex: 1,
        height: 44,
        backgroundColor: '#F9F9F9',
        borderRadius: 8,
        padding: 10,
        marginLeft: 10
    },
    section: {
        margin: 20,
        marginTop: 10
    },
    sectionTitle: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18
    },
    sectionCashback: {
        flexDirection: 'row',
        position: "absolute",
        bottom: -40,
        right: 0,
        marginRight: 20,
        alignItems: "center"
    },
    cashbackPercent: {
        marginRight: 20,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 18,
        color: '#FF2D55'
    },
    percentInput: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#E9E9E9',
        justifyContent: 'space-around',
        width: 115,
        borderRadius: 8
    },
    inputText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#424242'
    },
    difInputText: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 18,
        color: '#C4C4C4'
    },
    descriptionInput: {
        marginTop: 10,
        width: 343,
        height: 118,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        padding: 18,
        lineHeight: 20,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15,
    },
    hr: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#949494',
    },
    option: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10
    },
    optionDescription: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionDescriptionText: {
        marginLeft: 10
    },
    button: {
        backgroundColor: '#0091FF',
        padding: 18,
        margin: 80,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 8
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular'
    },
})

export default styles;