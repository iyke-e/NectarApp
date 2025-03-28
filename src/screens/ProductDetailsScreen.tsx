import {
    Image,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';
import BackButton from '@components/button/BackButton';
import { Icons } from '@assets/index';
import AppText from '@components/Text/AppText';
import Button from '@components/button/Button';
import { theme } from '@components/theme/theme';
import useHideBottomTab from '@hooks/useHideBottomTab';
import Body from '@components/layout/Body';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExploreStackParamList } from '@navigation/ExploreNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCartContext } from '@hooks/useCartContext';

type ProductDetailsScreenProps = {
    navigation: NativeStackNavigationProp<ExploreStackParamList, "ProductDetails">;
    route: { params: { product: any } };
};

const ProductDetailsScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ExploreStackParamList>>();
    const route = useRoute();
    const { product } = route.params as { product: any };
    const { addToCart } = useCartContext();
    const [quantity, setQuantity] = useState(1)

    return (
        <Body>
            <StatusBar backgroundColor="#F2F3F2" barStyle="dark-content" />

            <View style={styles.imageContainer}>
                <View style={styles.header}>
                    <BackButton onPress={() => navigation.goBack()} style={styles.backbtn} />
                    <Icons.Upload />
                </View>
                <Image style={styles.image} source={product.image} />
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.sectionBorder}>
                    <View style={styles.productHeader}>
                        <View>
                            <AppText style={styles.boldText} type='header'>{product.name}</AppText>
                            <AppText>{product.measure}, Price</AppText>
                        </View>
                        <Icons.Love />
                    </View>

                    <View style={styles.quantityContainer}>
                        <View style={styles.quantityButtons}>
                            <TouchableOpacity hitSlop={30} onPress={() => { setQuantity(Math.max(1, quantity - 1)) }}>
                                <Icons.Minus />
                            </TouchableOpacity>
                            <View style={styles.quantityBox}>
                                <AppText>{quantity}</AppText>
                            </View>
                            <TouchableOpacity hitSlop={30} onPress={() => setQuantity(quantity + 1)}>
                                <Icons.Plus />
                            </TouchableOpacity>
                        </View>
                        <AppText style={styles.boldText} type='header'>${(product.price * quantity).toFixed(2)}</AppText>
                    </View>
                </View>

                <View style={styles.productDetail}>
                    <View style={styles.productDetailsHeader}>
                        <AppText type='header'>Product Detail</AppText>
                        <Icons.ArrowBack style={styles.arrowDown} />
                    </View>
                    <AppText style={{ lineHeight: 30 }}>{product.details}</AppText>
                </View>

                <View style={styles.nutritionContainer}>
                    <AppText type='header'>Nutritions</AppText>
                    <View style={styles.nutritionContent}>
                        <AppText>{product.nutritions}</AppText>
                        <Icons.ArrowBack style={styles.arrowUp} />
                    </View>
                </View>

                <View style={styles.reviewContainer}>
                    <AppText type='header'>Review</AppText>
                    <View style={styles.reviewStars}>
                        <View style={{ flexDirection: "row" }}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Icons.Star key={index} />
                            ))}
                        </View>
                        <Icons.ArrowBack style={styles.arrowUp} />
                    </View>
                </View>

                <Button onPress={() => {
                    addToCart(product, quantity),
                        navigation.getParent()?.navigate("Cart")
                }} style={styles.addToBasket} title={"Add to Basket"} />
            </View>
        </Body>
    );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    backbtn: {
        marginBottom: 10
    },
    imageContainer: {
        backgroundColor: "#F2F3F2",
        paddingHorizontal: 25,
        height: 300,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    image: {
        marginHorizontal: "auto",
        width: "80%",
        height: "70%",
        resizeMode: "contain"
    },
    infoContainer: {
        padding: 25
    },
    sectionBorder: {
        gap: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border
    },
    productHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    boldText: {
        fontFamily: theme.fontFamily.GilroyBold
    },
    quantityContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    quantityButtons: {
        flexDirection: "row",
        gap: 20,
        alignItems: 'center'
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
    productDetail: {
        paddingVertical: 20,
        borderBottomColor: theme.color.border,
        borderBottomWidth: 1
    },
    productDetailsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    arrowDown: {
        transform: [{ rotate: "-90deg" }]
    },
    nutritionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomColor: theme.color.border,
        borderBottomWidth: 1
    },
    nutritionContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap: 20
    },
    arrowUp: {
        transform: [{ rotate: "180deg" }]
    },
    reviewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20
    },
    reviewStars: {
        flexDirection: "row",
        gap: 20
    },
    addToBasket: {
        marginHorizontal: "auto",
        marginTop: 20
    }
});
