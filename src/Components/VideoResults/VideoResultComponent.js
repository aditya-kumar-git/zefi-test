import moment from 'moment';
import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './VideoResultsStyle'

export default function SearchResultComponent(props) {
    const data = props.data.item
    return (
        <View
            style={styles.Container}
        >
            <Image
                source={{ uri: `${data.snippet.thumbnails.high.url}` }}
                style={styles.Thumbnail}
            />
            <Text
                numberOfLines={2}
                style={styles.Title}>{data.snippet.title}</Text>
            <Text
                numberOfLines={2}
                style={styles.SubText}>{data.snippet.description}</Text>

            <View
                style={styles.AdditionalDataContainer}
            >
                <Text style={styles.AdditionalData}>{data.snippet.channelTitle}</Text>
                <Text style={styles.Seperator}>|</Text>
                <Text style={styles.AdditionalData}>{moment(data.snippet.publishedAt).fromNow()}</Text>

            </View>
        </View>
    )
}
