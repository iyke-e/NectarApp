import AddButton from "@components/button/AddButton"
import AppText from "@components/Text/AppText"
import { theme } from "@components/theme/theme"
import React from "react"
import { Image, ImageProps, StyleSheet, TouchableOpacity, View } from "react-native"

type ProductProps = {
    image: ImageProps,
    name: string,
    measure: string,
    price: number,
    onPress: () => void,
    onAddToCart: () => void,
}

export const Product: React.FC<ProductProps> = ({ image, name, measure, price, onPress, onAddToCart }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.productContainer]}>
            <Image style={styles.productImg} source={image} />
            <AppText type='header' style={styles.productName}>{name}</AppText>
            <AppText >{measure} Price</AppText>
            <View style={styles.productPriceContainer}>
                <AppText type='header' style={styles.productPrice}>${price}</AppText>

                <AddButton onPress={onAddToCart} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        borderWidth: 1,
        borderColor: theme.color.border,
        padding: 15,
        flex: 1,
        borderRadius: 18,
        margin: 10,
        minWidth: 175
    },
    productImg: {
        marginInline: "auto",
        marginBottom: 25,
        marginTop: 10,
        resizeMode: "contain",
        height: 80
    },

    productName: {
        fontSize: 16,
        fontFamily: theme.fontFamily.GilroyBold,
        marginBottom: 10
    },
    productPriceContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    productPrice: {
        fontSize: 18,
        fontFamily: theme.fontFamily.GilroyBold

    },

})