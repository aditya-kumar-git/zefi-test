import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'Screens/Login'
import Dashboard from 'Screens/Dashboard'
import store from 'Redux/Store'
import { Provider } from "react-redux";


const Stack = createStackNavigator();
let loggedIn = true
export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator>
          {
            loggedIn ?
              <Stack.Screen name="Dashboard" component={Dashboard} />
              :
              <>
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Login" component={Login} />
              </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
