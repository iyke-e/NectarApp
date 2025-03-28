import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreen from '@screens/ExploreScreen'
import ProductScreen from '@screens/ProductScreen'
import ProductDetailsScreen from '@screens/ProductDetailsScreen'
import FilterScreen from '@screens/FilterScreen'
import { ProductType } from '@screens/ShopScreen'
import CartScreen from '@screens/CartScreen'
import { useIsFocused, useNavigation } from '@react-navigation/native'



export type ExploreStackParamList = {
    ExploreHome: undefined;
    Product: undefined;
    ProductDetails: { product: ProductType };
    Filter: undefined;
    Cart: undefined;
}

const Stack = createNativeStackNavigator<ExploreStackParamList>()

const ExploreNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ExploreHome' component={ExploreScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='Filter' component={FilterScreen} />
        </Stack.Navigator>
    )

}

export default ExploreNavigation

