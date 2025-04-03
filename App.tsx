import './gesture-handler';

import React, { useEffect } from 'react'
import Navigation from '@navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import { CartProvider } from '@context/CartContext';
import { AuthProvider } from '@context/AuthContext';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <Navigation />
        </CartProvider>
      </AuthProvider>
    </Provider>


  )
}

export default App

