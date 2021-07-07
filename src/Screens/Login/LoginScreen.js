import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Magic, RPCError, RPCErrorCode } from '@magic-sdk/react-native';
import { useDispatch } from 'react-redux';
import { authTokenAction } from 'Redux/Actions';



export default function LoginScreen(props) {


    const [emailAdd, setEmailAdd] = useState('')



    const changeEmail = (emailText) => {
        if (emailText[emailText.length - 1] !== ' ') {
            setEmailAdd(emailText)
        }
    }

    const sendEmail = async () => {
        console.log("Sending Email");
        try {
            var response = await auth.auth.loginWithMagicLink({ email: emailAdd});
            console.log("Kr diya login");
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

        // try {
        //     var res = await auth.user.getMetadata();
        //     console.log(res);
        // } catch (error) {

        // }

        // try {
        //     var res = await auth.user.getIdToken();
        //     console.log(res);
        // } catch (error) {

        // }
    }

    const auth = new Magic('pk_live_E057F6F4CA44BD41');
    const dispatch = useDispatch()
    return (
        <View
            style={{ flex: 1 }}
        >
            <Text>Login</Text>
            <TextInput
                style={{
                    backgroundColor: 'red',
                    padding: 12
                }}
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
            >
                <Text>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}
