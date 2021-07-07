import React from 'react';
import Navigator from 'Screens/Navigator'
import store from 'Redux/Store'
import { Provider } from "react-redux";
import { Magic } from '@magic-sdk/react-native';


export default function App() {

  const auth = new Magic('pk_live_E057F6F4CA44BD41');
  return (
    <Provider store={store} >
      <auth.Relayer />
      <Navigator />
    </Provider>
  );
}
