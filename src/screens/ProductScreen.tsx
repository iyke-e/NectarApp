import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import useHideBottomTab from '@hooks/useHideBottomTab'
import { Products } from 'data'

import { Icons } from '@assets/index'
import { Product } from '@components/layout/Product'
import { theme } from '@components/theme/theme'
import { useNavigation } from '@react-navigation/native'
import { ExploreStackParamList } from '@navigation/ExploreNavigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'
import Heading from '@components/layout/Heading'
import { useCartContext } from '@hooks/useCartContext'


type ExploreStackNavigationProp = NativeStackNavigationProp<ExploreStackParamList>

const ProductScreen = () => {

    const navigation = useNavigation<ExploreStackNavigationProp>()
    const { addToCart } = useCartContext()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <Heading title='Beverages' back filter />


            <View >
                <FlatList
                    data={Products.beverages}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    numColumns={2}


                    renderItem={({ item }) => (
                        <Product
                            onPress={() => { navigation.navigate("ProductDetails", { product: item }) }}
                            name={item.name}
                            image={item.image}
                            measure={item.measure}
                            price={item.price}
                            onAddToCart={() => { addToCart(item) }}

                        />
                    )}
                />
            </View>


        </SafeAreaView>

    )
}

export default ProductScreen

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 20,
        paddingHorizontal: 10
    },
    groceryTypeContainer: {
        width: 250,
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        padding: 15
    },
    listhead: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 25,
        alignItems: "center"
    }


})