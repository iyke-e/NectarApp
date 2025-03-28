import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ShopScreen, { ProductType } from '@screens/ShopScreen'
import ProductDetailsScreen from '@screens/ProductDetailsScreen'
import CartScreen from '@screens/CartScreen'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'



export type ShopStackParamList = {
    Home: undefined;
    ProductDetails: { product: ProductType };
    Cart: undefined
}

const Stack = createNativeStackNavigator<ShopStackParamList>()

const ShopNavigation = () => {



    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name='Home' component={ShopScreen} />
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen
                name='ProductDetails'
                component={ProductDetailsScreen}

            />
        </Stack.Navigator>

    )
}

export default ShopNavigation



