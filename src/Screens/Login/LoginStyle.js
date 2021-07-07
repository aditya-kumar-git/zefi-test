import {  StyleSheet } from "react-native";

export default StyleSheet.create({
    FullContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    UpperBlock: {
        backgroundColor: 'white',
        flex: 1
    },
    UpperBlockImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    LowerBlock: {
        backgroundColor: 'white',
        padding: 30,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: -50,
        paddingTop:40,
    },
    HeaderText: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    HeaderTextHighlight: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FF0000',
    },
    Subtext: {
        fontSize: 15,
        fontWeight: '300',
        marginVertical: 10,
        width: '75%',
        color: 'grey'
    },
    EmailInputLable: {
        fontWeight: '300',
        fontSize: 15,
        marginVertical: 10,
        color: 'grey'
    },
    EmailInput: {
        fontWeight: '300',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 30
    },
    SubmitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#050049',
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 30
    },
    SubmitButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

})