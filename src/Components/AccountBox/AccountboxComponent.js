import { Magic } from '@magic-sdk/react-native';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import styles from './AccountboxStyle'
import { useDispatch, useSelector } from 'react-redux';
import { authTokenAction } from 'Redux/Actions';

export default function AccountboxComponent(props) {
    const [accountBox, setAccountBox] = useState(false)

    const openCloseAccountBox = () => {
        setAccountBox(!accountBox)
    }

    const logOut = async () => {
        let loggedOut = await auth.user.logout()
        if (loggedOut) {
            console.log("HERE");
            dispatch(authTokenAction(''))
            setTimeout(() => {
                props.navigation.navigate("Login")
            }, 500);
        }
    }

    const MetaData = useSelector((state) => state.metaData)
    const auth = new Magic('pk_live_E057F6F4CA44BD41');
    const dispatch = useDispatch()
    return (
        <>
            <View
                style={styles.AccountContainer}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.AccountContainerTwo, { backgroundColor: accountBox ? '#FF0000' : 'black', }]}
                    onPress={openCloseAccountBox}
                >
                    <Entypo name="youtube" style={[styles.AccountIcon]} />
                </TouchableOpacity>
            </View>
            {accountBox &&
                <View
                    style={styles.AccountBoxParent}
                >
                    <TouchableOpacity
                        onPress={openCloseAccountBox}
                        style={styles.closeAccountBox}
                    >

                    </TouchableOpacity>
                    <View
                        style={styles.AccountBox}
                    >

                        <Text>{MetaData.email}</Text>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.logoutButton}
                            onPress={logOut}
                        >

                            <Text
                                style={styles.logoutText}

                            >Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </>
    )
}
