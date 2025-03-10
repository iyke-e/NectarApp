import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import GradientBackground from '@components/layout/GradientBackground'
import { Icons } from '@assets/index'
import AppText from '@components/Text/AppText'
import Button from '@components/button/Button'
import { theme } from '@components/theme/theme'
import { useNavigation } from '@react-navigation/native'

const PlaceOrderScreen = () => {
    const navigation = useNavigation()
    return (
        <GradientBackground style={styles.body}>
            <View style={styles.container}>
                <View style={styles.successCheck}>
                    <Icons.SuccessCheck />
                    <Icons.Celebrate style={styles.celebrate} />
                </View>
                <View>
                    <AppText style={styles.htxt} type='header'>
                        Your Order has been{"\n"}accepted
                    </AppText>

                    <AppText style={styles.ptxt}>Your items has been placed and is on{"\n"}its way to being processed</AppText>
                </View>
            </View>
            <Button style={{ marginBottom: 30 }} title={"Track Order"} />
            <TouchableWithoutFeedback onPress={() => { navigation.getParent()?.navigate("Shop") }}>
                <AppText style={styles.backHome}>
                    Back to Home
                </AppText>

            </TouchableWithoutFeedback>


        </GradientBackground>
    )
}

export default PlaceOrderScreen

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 25,

    },
    container: {
        minHeight: "80%"

    },
    successCheck: {
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: 450
    },
    celebrate: {
        position: "absolute",
        left: "50%",
        transform: [{
            translateX: "-57%"
        }]
    },
    htxt: {
        textAlign: "center",
        lineHeight: 40,
        fontFamily: theme.fontFamily.GilroyBold,
        marginBottom: 20,
    },
    ptxt: {
        textAlign: "center",
        lineHeight: 24
    },
    backHome: {
        textAlign: "center",
        color: theme.color.darkBlue,
        fontFamily: theme.fontFamily.GilroyBold,
    },

})