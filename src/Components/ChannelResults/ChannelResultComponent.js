import React from 'react'
import { Image, View, Text } from 'react-native'
import styles from './ChannelResultStyle'

export default function ChannelResultComponent(props) {
    const data = props.data.item
    return (
        <View
            style={styles.Container}
        >
            <View
                style={styles.ChannelLogoContainer}
            >

                <Image
                    source={{ uri: `${data.snippet.thumbnails.high.url}` }}
                    style={styles.ChannelLogo}
                />
                <Text
                    style={styles.Title}>{data.snippet.channelTitle}</Text>
            </View>
        </View>
    )
}
