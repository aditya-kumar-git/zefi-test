import {  StyleSheet } from "react-native";

export default StyleSheet.create({
    Container: {
        marginTop: 60,

    },
    Thumbnail: {
        height: 180,
        resizeMode: 'cover',
        borderRadius: 25
    },
    Title: {
        paddingLeft: 10,
        paddingRight: 40,
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20
    },
    SubText: {
        paddingLeft: 10,
        paddingRight: 40,
        fontSize: 15,
        fontWeight: '200',
        marginTop: 5,
        color: 'grey'
    },
    AdditionalDataContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 5
    },
    AdditionalData: {
        fontSize: 10,
        textTransform: 'capitalize'
    },
    Seperator: {
        marginHorizontal: 10,
        fontSize: 10,
    },
})