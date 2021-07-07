import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native'
import styles from './LoadingStyle'
import YoutubeLogo from 'Images/YoutubeLogo'

export default function LoadingScreen() {
    return (
        <View
            style={styles.FullContainer}
        >
            <StatusBar
                animated={true}
                hidden={true} 
                />
            <SafeAreaView
                style={styles.Container}
            >
                <View
                    style={styles.YoutubeLogoContainer}
                >

                    <YoutubeLogo />
                </View>
            </SafeAreaView>
        </View>
    )
}
