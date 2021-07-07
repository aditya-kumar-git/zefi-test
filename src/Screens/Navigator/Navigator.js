import { Magic } from '@magic-sdk/react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authTokenAction } from 'Redux/Actions';
import DashboardScreen from 'Screens/Dashboard';
import LoadingScreen from 'Screens/Loading';
import LoginScreen from 'Screens/Login';

export default function Navigator() {
    const [isLoading, setIsLoading] = useState(true)

    const auth = new Magic('pk_live_E057F6F4CA44BD41');

    useEffect(() => {
        checkLoggedIn()
    }, [])



    const checkLoggedIn = async () => {
        if (await auth.user.isLoggedIn()) {
            console.log("Logged in hai");
            const didToken = await auth.user.getIdToken(); 
            dispatch(authTokenAction(didToken))
            setIsLoading(false)
        }
        else {
            console.log("Logged in nhi hai");
            setIsLoading(false)
        }
    }
    const AuthToken = useSelector((state) => state.authToken)

    const Stack = createStackNavigator();
    const dispatch = useDispatch()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLoading ?
                        <Stack.Screen name="Loading" component={LoadingScreen} />
                        :
                        AuthToken !== '' ?
                            <Stack.Screen name="Dashboard" component={DashboardScreen} />
                            :
                            <>
                                <Stack.Screen name="Login" component={LoginScreen} />
                                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                            </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}