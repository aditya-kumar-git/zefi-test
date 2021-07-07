import { Magic } from '@magic-sdk/react-native';
import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function DashboardScreen() {
    const auth = new Magic('pk_live_E057F6F4CA44BD41');
    return (
        <View>
            <Text>DashboardScreen</Text>
            <Text
            onPress={async () => {
                await auth.user.logout()
            }}
            >Logout</Text>
        </View>
    )
}
