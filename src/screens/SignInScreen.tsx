import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Facebook from "@assets/svg/facebookwhite.svg"
import Google from "@assets/svg/googlewhite.svg"
import { SignInScreenProps } from '../types/navigation'
import AppText from '@components/Text/AppText'
import { theme } from '@components/theme/theme'


const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <Image
                source={require("@assets/Image/groceryimg.png")}
                style={styles.topimg}
                resizeMode='cover'
            />
            <View style={styles.container} >
                <AppText type='header'>
                    Get your groceries{"\n"}with nectar
                </AppText>


                <TouchableOpacity
                    style={styles.phoneNoInputContainer}
                    onPress={() => navigation.navigate("Number")}
                >
                    <Image source={require("@assets/Image/flag.png")}></Image>
                    <Text style={styles.number}>+880</Text>
                </TouchableOpacity>

                <Text style={styles.ptxt}>Or connet with social media</Text>

                <TouchableOpacity style={[styles.btn, styles.btn1]}>
                    <Text style={styles.btnTxt}>Continue with Google</Text>
                    <Google style={styles.svgIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.btn2]}>
                    <Text style={styles.btnTxt}>Continue with Facebook</Text>
                    <Facebook style={styles.svgIcon} />
                </TouchableOpacity>

            </View>



        </SafeAreaView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        position: "relative",

    },
    container: {
        paddingInline: 25,
        flex: 1,
        justifyContent: "flex-end"
    },
    topimg: {
        top: 0,
        right: 0,
        width: "100%",
        height: 374,
    },
    maintxt: {
        fontSize: 26,
        color: "#030303",
        fontWeight: 'semibold',
        marginBottom: 30
    },

    phoneNoInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2",
        marginBottom: 40,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        paddingBlockStart: 30,
        paddingBlockEnd: 15
    },
    ptxt: {
        textAlign: "center",
        color: "#828282",
        fontSize: 14,
        marginBottom: 38,
        fontFamily: theme.fontFamily.GilroySemibold

    },
    number: {
        fontFamily: theme.fontFamily.GilroyMedium,
        fontSize: theme.fontSizes.medium

    },
    btn: {
        width: "100%",
        height: 67,
        maxWidth: 353,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center",
        marginInline: "auto",
        position: "relative"

    },

    svgIcon: {
        position: "absolute",
        left: 35,
        marginBlock: "auto"
    },


    btn1: {
        backgroundColor: "#5383EC",
        marginBottom: 20,

    },
    btn2: {
        backgroundColor: "#4A66AC",
        marginBottom: 90,

    },
    btnTxt: {
        fontSize: 18,
        color: "#fff",
        fontFamily: theme.fontFamily.GilroySemibold
    }
})