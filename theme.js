import { StyleSheet } from 'react-native';

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:100,
        alignSelf: 'stretch',
        paddingHorizontal: 0,
        paddingVertical: 40,
    },
    tabActive: {
        backgroundColor: 'rgb(128,127,227)',
        borderRadius: 50,
       width:20,
       height:20,
       color:'#fff'
    },
    tabUnActive: {
       backgroundColor: 'rgb(128,127,227)',
       borderRadius: 50,
       width:10,
       height:10,
       color:'#fff'
    },
    tabBarStyle: {
        backgroundColor: 'rgb(37,20,72)',
    },
    bgBlue: {
        backgroundColor: 'rgb(128,127,227)'
    },
    bgDarkBlue: {
        backgroundColor: 'rgb(37,20,72)'
    },
    bgbgRed: {
        backgroundColor: 'rgb(250,0,0)'
    },
    Blue: {
        color: 'rgb(128,127,227)'
    },
    DarkBlue: {
        color: 'rgb(37,20,72)'
    },
    bgRed: {
        color: 'rgb(250,0,0)'
    },
    btnBlue:{
        backgroundColor:'rgb(128,127,227)',
        // color: 'rgb(255,255,255)',
        borderRadius:50
    },
    btnCirlce:{
        width:30,
        height:30,
        borderRadius:50,
        marginBottom: 20,
    }
});

