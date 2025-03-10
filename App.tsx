import './gesture-handler';

import React, { useEffect } from 'react'
import Navigation from '@navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { CartProvider } from '@context/CartContext';
import { AuthProvider } from '@context/AuthContext';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <AuthProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </AuthProvider>

  )
}

export default App

