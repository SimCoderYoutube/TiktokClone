import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants'
import firebase from 'firebase/app'

if (firebase.apps.lenght == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Subscribe to simcoder!</Text>
      <StatusBar style="auto" />
    </View>
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
