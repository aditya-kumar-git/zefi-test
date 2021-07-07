import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
   
    AccountContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    AccountContainerTwo: {
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    AccountIcon: {
        color: 'white',
        fontSize: 25
    },
    AccountBoxParent: {
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:100,
        width: '100%',
        zIndex:1,
    },
    closeAccountBox: {
        height:'100%',
        width:'100%',
        position:'absolute'
    },
    AccountBox: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        backgroundColor:'white',
        paddingVertical:20,
        paddingHorizontal:20,
        borderRadius:20
    },
    logoutButton: {
        backgroundColor:'#F5F5F4',
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:20,
        borderRadius:15
    },
    logoutText: {
        fontSize:15,
        color:'#505050',
    },
})