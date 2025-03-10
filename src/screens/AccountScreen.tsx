import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icons, Images } from '@assets/index'
import AppText from '@components/Text/AppText'
import { theme } from '@components/theme/theme'
import Button from '@components/button/Button'


const menuOption = [
    {
        icon: Icons.Order,
        title: "Order"
    },
    {
        icon: Icons.Details,
        title: "My Details"
    },
    {
        icon: Icons.Location,
        title: "Delivery Address"
    },
    {
        icon: Icons.Payment,
        title: "Payment Method"
    },
    {
        icon: Icons.Promo,
        title: "Promo Card"
    },
    {
        icon: Icons.Bell,
        title: "Notifications"
    },
    {
        icon: Icons.Help,
        title: "Help"
    },
    {
        icon: Icons.About,
        title: "About"
    },
]

const AccountScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ padding: 25, flex: 1 }}>
                <View style={styles.profile}>
                    <Image style={{ width: 64, height: 64 }} resizeMode='contain' source={Images.Profile} />
                    <View >

                        <AppText style={styles.name} type='header'>Afsar Hossen <Icons.EditPen /></AppText>

                        <AppText >Imshuvo97@gmail.com</AppText>
                    </View>

                </View>
                <View style={styles.menuContainer}>
                    {
                        menuOption.map((menu, index) => (
                            <View style={styles.menuItem} key={index}>
                                <menu.icon />
                                <AppText style={styles.title} >{menu.title}</AppText>
                                <Icons.ArrowBack style={{ transform: [{ rotate: "180deg" }] }} />
                            </View>
                        ))
                    }



                </View>
                <View style={{ position: "relative" }}>

                    <Button title={"Log Out"} textStyle={{ color: theme.color.green }} style={{ backgroundColor: "#F2F3F2" }} />
                    <Icons.Logout style={{ position: "absolute", left: 25, top: "50%", transform: [{ translateY: "-50%" }] }} />

                </View>



            </View>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border
    },
    title: {
        flex: 1,
        fontFamily: theme.fontFamily.GilroyMedium,
        color: theme.color.darkBlue,
        fontSize: 18
    },
    menuContainer: {
        minHeight: "75%"
    },
    profile: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: theme.color.border,
        paddingBottom: 30
    }, name: {
        fontSize: 20,
        fontFamily: theme.fontFamily.GilroyBold
    }

})