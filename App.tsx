import './gesture-handler';

import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Navigator from './src/navigator/Navigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)


  }, [])

  return (
    <Navigator />
  )
}

export default App

