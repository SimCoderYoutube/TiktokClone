import React from 'react';
import * as firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))


import Constants from 'expo-constants'
import AuthScreen from './src/screens/auth';


if (firebase.apps.lenght === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
}

export default function App() {
  return (
    <Provider store={store} >
      <AuthScreen />
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
