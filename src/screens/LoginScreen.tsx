import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CarrotLogo from '@assets/svg/orangecarrot.svg'
import Button from '@components/button/Button'
import { LoginScreenProps } from 'types/navigation'
import GradientBackground from '@components/layout/GradientBackground'
import AppText from '@components/Text/AppText'
import { InputField } from '@components/input/InputField'
import { useAuthContext } from '@hooks/useAuthContext'

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const { setIsLoggedIn } = useAuthContext()

    return (
        <GradientBackground style={{ paddingInline: 25 }}>
            <CarrotLogo style={styles.logo} />
            <AppText type='header'>Login</AppText>
            <AppText style={styles.ptxt} >Enter your Email and password</AppText>

            <View style={styles.form}>
                <InputField
                    label='Email'
                    type='email'
                    placeholder={"Enter Email"}

                />
                <InputField
                    label='Password'
                    type='password'
                    placeholder='Enter password'

                />

            </View>

            <Text style={styles.forgotPass}>Forgot Password?</Text>
            <View style={styles.btnContainer}>
                <Button
                    title={"Log in"}
                    onPress={() => { setIsLoggedIn(true) }}

                />
            </View>
            <Text style={styles.ctatxt}>
                Don't have an account? {" "}
                <Text style={styles.txthighlight} onPress={() => navigation.replace("Signup")}>
                    Signup
                </Text>

            </Text>

        </GradientBackground>

    )
}

export default LoginScreen

const styles = StyleSheet.create({

    logo: {
        marginInline: "auto",
        marginBlockStart: 30,
        marginBlockEnd: 100,
    },
    mainTxt: {
        fontSize: 26,
        fontWeight: "semibold",
        color: "#181725",
    },
    ptxt: {
        marginBottom: 40,
        marginTop: 10
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
    },
    txthighlight: {
        color: "#53B175"
    }
})