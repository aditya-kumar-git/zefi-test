import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    FullContainer: {
        flex: 1, backgroundColor: '#FF0000'
    },
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    YoutubeLogoContainer: {
        width: 0.7 * Dimensions.get('screen').width,
    },
})