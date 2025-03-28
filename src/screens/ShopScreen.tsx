import { StyleSheet, View, Image, ScrollView, ImageProps } from 'react-native'
import React, { useEffect } from 'react'
import { Icons, Images } from "assets"
import AppText from '@components/Text/AppText'
import { SearchInput } from '@components/input/InputField'
import { theme } from '@components/theme/theme'
import { Products } from 'data'
import { Product } from '@components/layout/Product'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ShopStackParamList } from '@navigation/ShopNavigation'
import Body from '@components/layout/Body'
import { useCartContext } from '@hooks/useCartContext'

export type ProductType = {
    id: string,
    name: string,
    image: ImageProps,
    measure: string,
    price: number,
    quantity: number
}

type ShopStackNavigationProp = NativeStackNavigationProp<ShopStackParamList>

type SectionProps = {
    sectionName: string,
    data: ProductType[],
    groceryType?: boolean
}


const Section: React.FC<SectionProps> = ({ sectionName, data, groceryType }) => {

    const { addToCart, cartItem } = useCartContext()

    const navigation = useNavigation<ShopStackNavigationProp>()
    return (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <AppText type='header'>{sectionName}</AppText>
                <AppText style={{ color: theme.color.green }} >see all</AppText>
            </View>
            {
                groceryType && <ScrollView showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }} contentContainerStyle={{ gap: 15, paddingHorizontal: 25 }} horizontal={true} >
                    {
                        Products.groceryType.map((item, index) => {
                            return (
                                <View key={index} style={[styles.groceryTypeContainer, { backgroundColor: item.bgColor }]}>
                                    <Image source={item.image} />
                                    <AppText style={{ fontSize: 20 }} type='header'>{item.name}</AppText>
                                </View>
                            )
                        })
                    }

                </ScrollView>
            }

            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} horizontal={true} >
                {
                    data?.map((item, index) => {
                        return (
                            <Product
                                key={index}
                                onPress={() => { navigation.navigate("ProductDetails", { product: item }) }}
                                name={item.name}
                                image={item.image}
                                measure={item.measure}
                                price={item.price}
                                onAddToCart={() => { addToCart(item) }}
                            />
                        )
                    })
                }

            </ScrollView>



        </View>
    )
}

const ShopScreen = () => {

   

    return (
        <Body>
            <View style={{ paddingHorizontal: 25, flex: 1 }}>
                <Icons.OrangeCarrot style={styles.logo} width={26} height={30} />
                <View style={styles.title}>
                    <Icons.Location />
                    <AppText style={styles.headText} type='header'>Dhaka, Banassre</AppText>
                </View>
                <SearchInput />
                <Image source={Images.Banner} style={styles.banner} />

            </View>


            <Section sectionName={"Exclusive Offer"} data={Products.exclusiveOffer} />
            <Section sectionName={"Best Selling"} data={Products.bestSelling} />


            <Section sectionName={"Groceries"} data={Products.groceries} groceryType />

        </Body>



    )
}

export default ShopScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: theme.color.white,
        paddingHorizontal: 25
    },
    headText: {
        fontSize: 20
    },
    logo: {
        marginInline: "auto",
        marginTop: 20
    },
    title: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20
    },
    banner: {
        marginTop: 20,
        width: "100%"
    },
    section: {
        marginTop: 30
    },
    sectionHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
        paddingHorizontal: 25
    },



    groceryTypeContainer: {
        width: 250,
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        padding: 15
    }
})
