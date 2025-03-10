import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppText from '@components/Text/AppText'
import { Icons } from '@assets/index'
import Button from '@components/button/Button'
import { theme } from '@components/theme/theme'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CartStackParamList } from '@navigation/CartNavigation'


type CartStackNavigationProp = NativeStackNavigationProp<CartStackParamList>


const CheckoutModal = ({ totalPrice, isVisible, setIsVisible }: {
    totalPrice: string, isVisible: boolean, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const translateY = useSharedValue(600)
    useEffect(() => {
        if (isVisible) {
            translateY.value = withSpring(0, { damping: 15 })
        } else {
            translateY.value = withSpring(600, { damping: 15 })
        }
    }, [isVisible])

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
    }))

    const navigation = useNavigation<CartStackNavigationProp>()
    return (
        <Modal transparent visible={isVisible} animationType='none'>
            <TouchableWithoutFeedback onPress={() => { setIsVisible(false) }}>
                <View style={styles.overlay}>
                    <Animated.View style={[styles.container, animatedStyle]}>


                        <View style={styles.header}>
                            <AppText type='header'>
                                Checkout
                            </AppText>

                            <TouchableWithoutFeedback onPress={() => { setIsVisible(false) }}>
                                <Icons.Close />
                            </TouchableWithoutFeedback>

                        </View>
                        <View style={styles.checkItemContainer}>
                            <AppText>Delivery</AppText>
                            <View style={styles.icon}>
                                <AppText style={styles.priceText}>Select Method</AppText>
                                <Icons.ArrowBack style={styles.arrow} />
                            </View>
                        </View>
                        <View style={styles.checkItemContainer}>
                            <AppText>Payment</AppText>
                            <View style={styles.icon}>
                                <Icons.Card />
                                <Icons.ArrowBack style={styles.arrow} />
                            </View>
                        </View>
                        <View style={styles.checkItemContainer}>
                            <AppText>Promo Code</AppText>
                            <View style={styles.icon}>
                                <AppText style={styles.priceText}>Pick discount</AppText>
                                <Icons.ArrowBack style={styles.arrow} />
                            </View>
                        </View>
                        <View style={styles.checkItemContainer}>
                            <AppText>Total Cost</AppText>
                            <View style={styles.icon}>
                                <AppText style={styles.priceText}>${totalPrice}</AppText>
                                <Icons.ArrowBack style={styles.arrow} />
                            </View>
                        </View>

                        <AppText style={{ marginTop: 20, lineHeight: 25 }}>By placing an order you agree to our {" "} <AppText style={styles.texthighlight}>Terms</AppText> And <AppText style={styles.texthighlight}>Conditions</AppText> </AppText>

                        <Button style={{ marginTop: 26 }} onPress={() => navigation.navigate('PlaceOrder')} title={"Place Order"} />

                    </Animated.View>

                </View>
            </TouchableWithoutFeedback>
        </Modal>

    )
}

export default CheckoutModal

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "flex-end"
    },
    container: {
        minHeight: 540,
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 25
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30,
        borderBottomColor: theme.color.border,
        borderBottomWidth: 1
    },

    checkItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border

    },
    texthighlight: {
        fontFamily: theme.fontFamily.GilroyBold,
        color: theme.color.darkBlue
    },
    arrow: { transform: [{ rotate: "180deg" }] },
    priceText: { color: theme.color.darkBlue, fontFamily: theme.fontFamily.GilroyBold },
    icon: { flexDirection: "row", gap: 15 }
})