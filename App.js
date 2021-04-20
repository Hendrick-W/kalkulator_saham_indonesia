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
    <MainNavigation/>
  );
};


export default App;
