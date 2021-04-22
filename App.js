/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import SplashScreen from './src/screens/SplashScreen'
import MainNavigation from './src/navigation/MainNavigation'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {configureStore, persistor} from './src/config/store'

const App = () => {
  
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1500);
  }, []);

  return splash ? 
  (<SplashScreen/>):
  (
    <Provider store={configureStore}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation/>
      </PersistGate>
    </Provider>
  );
};


export default App;
