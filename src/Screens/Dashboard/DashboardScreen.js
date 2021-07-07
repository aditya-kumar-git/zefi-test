import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function DashboardScreen() {
    const TempTest = useSelector((state) => state.tempTest)
    return (
        <View>
            <Text>DashboardScreen</Text>
            <Text>{TempTest}</Text>
        </View>
    )
}
