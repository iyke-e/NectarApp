import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Heading from '@components/layout/Heading'
import { useCartContext } from '@hooks/useCartContext'
import { Icons, Images } from '@assets/index'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppText from '@components/Text/AppText'
import { theme } from '@components/theme/theme'
import Button from '@components/button/Button'
import { CartItemProps } from '@context/CartContext'
import App from '../../App'
import CheckoutModal from '@components/layout/CheckoutModal'

const checkoutItem = ({ total }: { total: number }) => {
    return [
        {
            name: "Delivery",
            option: "Select Method"
        },
        {
            name: "Payment",
            option: <Icons.Payment />
        },
        {
            name: "Promo Code",
            option: "Pick discount"
        },
        {
            name: "Total Cost",
            option: `$${total}`
        },
    ]
}


const CartScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    const { cartItem, removeFromCart, increaseQuantity, decreaseQuantity, TotalPrice } = useCartContext()
    const totalPrice = TotalPrice().toFixed(2)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Heading title='My Cart' />

                {
                    cartItem.length === 0
                        ? <View style={styles.emptyCart}>
                            <Icons.Cart width={200} height={300} />
                            <AppText type='header'>Your Cart is Empty</AppText>

                        </View>
                        : <ScrollView >
                            <View style={{ minHeight: "85%" }}>
                                {
                                    cartItem.map((item: CartItemProps,) => (
                                        <View key={item.id} style={styles.cartItemContainer}>
                                            <View style={styles.imageContainer}>
                                                <Image resizeMode='contain' style={{ height: 70 }} source={item.image} />

                                            </View>

                                            <View style={{ flexGrow: 1 }}>
                                                <AppText style={styles.name}>{item.name}</AppText>
                                                <AppText>{item.measure} Price</AppText>


                                                <View style={styles.quantityButtons}>
                                                    <TouchableOpacity onPress={() => { decreaseQuantity(item.id) }} hitSlop={20} style={styles.quantityBox}>
                                                        <Icons.Minus />
                                                    </TouchableOpacity>
                                                    <View >
                                                        <AppText>{item.quantity}</AppText>
                                                    </View>
                                                    <TouchableOpacity onPress={() => { increaseQuantity(item.id) }} hitSlop={20} style={styles.quantityBox}>
                                                        <Icons.Plus />
                                                    </TouchableOpacity>

                                                </View>

                                            </View>
                                            <View style={styles.deleteContainer}>
                                                <TouchableOpacity hitSlop={30} onPress={() => { removeFromCart(item.id) }}>
                                                    <Icons.LightClose />

                                                </TouchableOpacity>

                                                <AppText style={styles.price}>${
                                                    (item.price * item.quantity).toFixed(2)
                                                }</AppText>
                                            </View>


                                        </View>
                                    ))
                                }
                            </View>

                            <View style={styles.buttonContainer}>
                                <AppText style={styles.totalPrice}>${totalPrice}</AppText>
                                <Button onPress={() => setIsVisible(true)} title={"Go to Checkout"} />

                            </View>


                        </ScrollView>

                }



                <CheckoutModal totalPrice={totalPrice} isVisible={isVisible} setIsVisible={setIsVisible} />




            </View>
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    emptyCart: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    cartContainer: {
        flex: 1
    },
    cartItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        paddingVertical: 25,
        borderTopColor: theme.color.border,
        borderTopWidth: 1,
        gap: 30

    },
    buttonContainer: {
        marginHorizontal: 25,
        marginVertical: 30,
        position: "relative"
    },
    totalPrice: {
        position: "absolute",
        right: 25,
        zIndex: 12,
        top: "50%",
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 5,
        borderRadius: 4,
        color: "#fff",
        transform: [{
            translateY: "-50%"
        }]


    },
    name: {
        fontSize: 18,
        fontFamily: theme.fontFamily.GilroyBold,
        color: theme.color.darkBlue,
        marginBottom: 5,

    },
    quantityButtons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 10
    },
    quantityBox: {
        borderWidth: 1,
        padding: 10,
        width: 46,
        height: 46,
        alignItems: "center",
        justifyContent: "center",
        borderColor: theme.color.border,
        borderRadius: 18
    },
    deleteContainer: {
        justifyContent: "space-between",
        alignItems: "flex-end",

    },
    price: {
        fontFamily: theme.fontFamily.GilroyBold,
        color: theme.color.darkBlue,
        fontSize: 18
    },
    imageContainer: {
        width: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },


})