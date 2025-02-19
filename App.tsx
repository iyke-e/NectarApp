import './gesture-handler';

import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigator from './src/navigator/Navigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }

  }, [])

  return (
    <Navigator />
  )
}

export default App

