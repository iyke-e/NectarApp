import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Heading from '@components/layout/Heading'
import { Icons, Images } from '@assets/index'
import AppText from '@components/Text/AppText'
import { theme } from '@components/theme/theme'
import Button from '@components/button/Button'

const favList = [
    {
        image: Images.Sprite,
        name: "Sprite Can",
        measure: "325ml",
        price: 1.50
    },
    {
        image: Images.Coke,
        name: "Diet Coke",
        measure: "335ml",
        price: 1.99
    },
    {
        image: Images.AppleJuice,
        name: "Apple & Grape Juice",
        measure: "2L",
        price: 1.50
    },
    {
        image: Images.CanCoke,
        name: "Coca Cola Can",
        measure: "325ml",
        price: 1.50
    },
    {
        image: Images.PepsiCan,
        name: "Pepsi Can",
        measure: "325ml",
        price: 1.50
    },
]

const FavouriteScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Heading title='Favourite' />
                <ScrollView>
                    <View style={{ minHeight: "85%" }}>
                        {

                            favList.map((item, index) => (
                                <View key={index} style={styles.cartItemContainer}>
                                    <View style={styles.imageContainer}>
                                        <Image style={{ width: 55, height: 55 }} resizeMode='contain' source={item.image} />

                                    </View>

                                    <View style={{ flexGrow: 1 }}>
                                        <AppText style={styles.name}>{item.name}</AppText>
                                        <AppText>{item.measure} Price</AppText>

                                    </View>
                                    <View style={styles.deleteContainer}>



                                        <AppText style={styles.price}>${item.price}</AppText>
                                        <TouchableOpacity>
                                            <Icons.ArrowBack style={{ transform: [{ rotate: "180deg" }] }} />

                                        </TouchableOpacity>
                                    </View>


                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title={"Add All To Cart"} />

                    </View>

                </ScrollView>




            </View>





        </SafeAreaView>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 25,
        paddingVertical: 25,
        borderTopColor: theme.color.border,
        borderTopWidth: 1,
        gap: 30

    }, imageContainer: {
        width: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        fontSize: 18,
        fontFamily: theme.fontFamily.GilroyBold,
        color: theme.color.darkBlue,
        marginBottom: 5,

    }, deleteContainer: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row",
        gap: 20

    },
    price: {
        fontFamily: theme.fontFamily.GilroyBold,
        color: theme.color.darkBlue,
        fontSize: 18
    },
    buttonContainer: {
        marginHorizontal: 25,
        marginVertical: 30,
        position: "relative"
    },
})