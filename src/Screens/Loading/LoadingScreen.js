import React, { useRef } from 'react'
import {Text, View, SafeAreaView, StatusBar,Animated, Dimensions } from 'react-native'
import styles from './LoadingStyle'
import YoutubeLogo from 'Images/YoutubeLogo'
import { useEffect } from 'react';

export default function LoadingScreen() {
    const logoSize = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
              Animated.timing(logoSize, {
                toValue: 0.8,
                duration: 1000,
                useNativeDriver:true
              }),
              Animated.timing(logoSize, {
                toValue: 1,
                duration: 1000,
                useNativeDriver:true
              })
            ]),
            {
              iterations: 100
            }
          ).start()
    }, [])

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
                <Animated.View
                    style={[styles.YoutubeLogoContainer,{transform: [{scale:logoSize}]}]}
                >
                    <YoutubeLogo />
                </Animated.View>
            </SafeAreaView>
        </View>
    )
}
