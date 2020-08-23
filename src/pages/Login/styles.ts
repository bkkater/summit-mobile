import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0091FF',
        padding: 18,
        margin: 35,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular'
    },
})

export default styles;