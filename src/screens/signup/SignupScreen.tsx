import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CarrotLogo from '../../assets/svg/orangecarrot.svg'
import Button from '../../components/button/Button'

const SignupScreen = () => {
    return (
        <SafeAreaView style={styles.body}>
            <CarrotLogo style={styles.logo} />

            <Text style={styles.mainTxt}>Sign Up</Text>
            <Text style={styles.ptxt}>Enter your credentials to continue</Text>

            <View style={styles.form}>
                <View>
                    <Text>
                        Username
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder='Enter Email'
                    />
                </View>
                <View>
                    <Text>
                        Email
                    </Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder='Enter Email'
                    />
                </View>
                <View>
                    <Text>
                        Password
                    </Text>
                    <TextInput
                        placeholder='Enter password'
                        style={styles.inputField}

                    />
                </View>
            </View>

            <Text style={styles.forgotPass}>By continuing you agree to our Terms of Service and Privacy Policy</Text>
            <View style={styles.btnContainer}>
                <Button
                    title={"Sign Up"}
                />
            </View>
            <Text style={styles.ctatxt}>
                Already have an account? Login
            </Text>

        </SafeAreaView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    body: {
        paddingInline: 25
    },
    logo: {
        marginInline: "auto",
        marginBlockStart: 50,
        marginBlockEnd: 100,
    },
    mainTxt: {
        fontSize: 26,
        fontWeight: "semibold",
        color: "#181725",
        marginBottom: 10
    },
    ptxt: {
        fontSize: 16,
        color: "#7C7C7C",
        marginBottom: 40
    },
    form: {
        gap: 30,
        marginBottom: 20
    },
    inputField: {
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2"
    },
    forgotPass: {
        textAlign: "right",
        marginBottom: 30
    },

    btnContainer: {
        marginBottom: 25
    },
    ctatxt: {
        textAlign: "center",
        fontSize: 14
    }
})