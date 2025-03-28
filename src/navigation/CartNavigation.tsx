import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '@screens/CartScreen';
import PlaceOrderScreen from '@screens/PlaceOrderScreen';
import ShopScreen from '@screens/ShopScreen';


export type CartStackParamList = {
    CartHome: undefined;
    PlaceOrder: undefined;
    Shop: undefined

}

const Stack = createNativeStackNavigator<CartStackParamList>()
const CartNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='CartHome' component={CartScreen} />
            <Stack.Screen name='PlaceOrder' component={PlaceOrderScreen} />
            <Stack.Screen name='Shop' component={ShopScreen} />

        </Stack.Navigator>
    )

}

export default CartNavigation
