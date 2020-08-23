import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    profileDescription: {
        margin: 30,
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 15
    },
    profileName: {
        marginLeft: 20,
        marginTop: 2
    },
    profileNameText: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 25,
        color: '#323232'
    },
    profileNick: {
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 20,
        color: '#757575',
        marginTop: 2
    },
    profileType: {
        backgroundColor: '#FF2D55',
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        padding: 7,
        marginTop: 11
    },
    profileTypeText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF'
    },
    bio: {
        margin: 30,
        marginTop: 0,
        marginBottom: 15,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 18,
        lineHeight: 21,
        width: 306
    },
    hashtag: {
        marginLeft: 30,
        color: '#2C007C',
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 15
    },
    imageGroup: {
        flexDirection:'row',
        marginTop: 10
    },
    difImageGroup: {
        flexDirection:'row',
        marginTop: 3
    },
    image: {
        marginRight: 2
    }
})

export default styles;