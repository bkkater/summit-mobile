import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: '#0091FF',
        padding: 18,
        margin: 35,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular'
    },
    buttonGroup: {
        marginTop: 100
    },
    difButton: {
        backgroundColor: '#05B88A', 
    
        padding: 18,
        margin: 35,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
    difButtonText: {       
        color: '#FFF',
        fontFamily: 'Ubuntu_400Regular',
        borderRadius: 30
    },
    versionText: {
        color: '#565656',
        position: "absolute",
        bottom: -350,
        left: 150
    },
    icon: {
        bottom: -350,
        left: 320
    }
})

export default styles;