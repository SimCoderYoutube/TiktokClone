import Constants from 'expo-constants';
import * as firebase from 'firebase';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Route from './src/navigation/main';
import rootReducer from './src/redux/reducers';
import AuthScreen from './src/screens/auth';


const store = createStore(rootReducer, applyMiddleware(thunk))




if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase)
} else {
  firebase.app()
}

export default function App() {
  return (
    <Provider store={store} >
      <Route />
    </Provider>
  );
}
