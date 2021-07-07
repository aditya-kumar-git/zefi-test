import React, { useState } from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard, StatusBar } from 'react-native'
import { Magic, RPCError, RPCErrorCode } from '@magic-sdk/react-native';
import { useDispatch } from 'react-redux';
import { authTokenAction, metaDataAction } from 'Redux/Actions';
import styles from './LoginStyle'
import BannerImage from 'Images/BannerImage.jpg'



export default function LoginScreen(props) {


    const [emailAdd, setEmailAdd] = useState('')



    const changeEmail = (emailText) => {
        if (emailText[emailText.length - 1] !== ' ') {
            setEmailAdd(emailText)
        }
    }

    const sendEmail = async () => {
        if (emailAdd !== '') {
            Keyboard.dismiss()
            try {
                var response = await auth.auth.loginWithMagicLink({ email: emailAdd });
                dispatch(authTokenAction(response))
            } catch (err) {
                if (err instanceof RPCError) {
                    switch (err.code) {
                        case RPCErrorCode.MagicLinkFailedVerification: alert("Verification Failed"); break
                        case RPCErrorCode.MagicLinkExpired: alert("Link Expired"); break
                        case RPCErrorCode.MagicLinkRateLimited: alert("Link Rate Limited"); break
                        case RPCErrorCode.UserAlreadyLoggedIn: alert("User Already LoggedIn"); break
                    }
                }

            }

            try {
                const didMetaData = await auth.user.getMetadata();
                dispatch(metaDataAction(didMetaData))
            } catch (error) {
                console.log(error);
            }
        }
    }

    const auth = new Magic('pk_live_E057F6F4CA44BD41');
    const dispatch = useDispatch()
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
        >
            <StatusBar
                animated={true}
                hidden={true}
            />
            <View
                style={styles.FullContainer}
            >

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                    style={styles.UpperBlock}
                >
                    <Image
                        source={BannerImage}
                        style={styles.UpperBlockImage}
                    />

                </TouchableOpacity>
                <SafeAreaView
                    style={styles.Container}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={Keyboard.dismiss}
                        style={styles.LowerBlock}>

                        <Text style={styles.HeaderText}>Welcome to</Text>
                        <Text style={styles.HeaderTextHighlight}>YouTube</Text>
                        <Text style={styles.Subtext}>Boradcast Yourself, and watch a number of your favourite creators.</Text>
                        <TextInput
                            style={styles.EmailInput}
                            placeholder="Email ID"
                            value={emailAdd}
                            onChangeText={changeEmail}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCompleteType='email'
                            textContentType='emailAddress'
                            autoCorrect={false}
                            returnKeyType='go'
                            onSubmitEditing={sendEmail}
                        />
                        <TouchableOpacity
                            onPress={sendEmail}
                            style={styles.SubmitButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.SubmitButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </SafeAreaView>
            </View>
        </KeyboardAvoidingView>
    )
}
