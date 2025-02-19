import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Facebook from "../../assets/svg/facebookwhite.svg"
import Google from "../../assets/svg/googlewhite.svg"
import PhoneInput from "react-native-phone-number-input";
import { SignInScreenProps } from '../../types/navigation'


const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <Image
                source={require("../../assets/Image/groceryimg.png")}
                style={styles.topimg}
                resizeMode='cover'
            />
            <View style={styles.container} >

                <Text style={styles.maintxt}>Get your groceries {"\n"} with nectar</Text>

                <TouchableOpacity
                    style={styles.phoneNoInputContainer}
                    onPress={() => navigation.navigate("Number")}
                >
                    <PhoneInput
                        textContainerStyle={{ backgroundColor: "#fff" }}
                        disabled
                        defaultCode='NG'
                    />
                </TouchableOpacity>

                <Text style={styles.ptxt}>or connet with social media</Text>

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
        marginBottom: 40
    },
    ptxt: {
        textAlign: "center",
        color: "#828282",
        fontSize: 14,
        marginBottom: 38

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
        fontWeight: "semibold"
    }
})