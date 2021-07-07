import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    FullContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 30
    },
    Container: {
        flex: 1,
        backgroundColor: 'white'
    },
    SearchBar: {
        fontSize: 15,
        flex: 1
    },
    SearchBarContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    IconStyle: {
        fontSize: 18,
        marginRight: 10,
        color: 'grey'
    },
    ActivityIndicatorContainer: {
        justifyContent:'center',alignItems:'center',flex:1
    },
   
})