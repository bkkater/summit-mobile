import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuBar: {
        backgroundColor: "#F7F7F7",
        borderColor: '#C8C2C2',
        borderWidth: 1,
        borderStyle: "solid",
        height: 78,
    },
    card: {
        marginLeft: 18,
        marginRight: 18,
        marginBottom: 15,
        marginTop: 15,
        backgroundColor: '#0091FF',
        borderRadius: 8,
        padding: 25
    },
    suggestionText: {
        fontFamily: 'Ubuntu_400Regular',
        lineHeight: 18,
        color: '#FFF'
    },
    suggestion: {
        fontFamily: 'Ubuntu_500Medium',
        lineHeight: 20,
        color: '#FFF',
        position: "absolute",
        right: 25,
        bottom: 12,
    },
    transationText: {
        fontSize: 20,
        fontFamily: 'Ubuntu_400Regular',
        marginLeft: 20
    },
    transitionContent: {
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        margin: 20,
        marginBottom: 10
    },
    transitionCard: {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 20,
    },
    transitionInformation: {
        padding: 15,
    },
    transitionName: {
        fontSize: 15,
        fontFamily: 'Ubuntu_400Regular',
        marginBottom: 5
    },
    transitionPrice: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#0091FF'
    },
    transitionRedPrice: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        color: '#FF2D55'
    },
    expand: {
        padding: 8
    },
    expandContent: {
        flexDirection: 'row',
        position: "absolute",
        justifyContent: "center",
        bottom: 15,
        right: 20,
    },
    expandText: {
        marginRight: 5
    },
    options: {
        flexDirection: 'row'
    },
    option: {
        width: 62,  
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
});


export default styles;