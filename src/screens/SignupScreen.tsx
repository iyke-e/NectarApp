import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CarrotLogo from '@assets/svg/orangecarrot.svg'
import Button from '@components/button/Button'
import { SignupScreenProps } from "../types/navigation"
import { InputField } from '@components/input/InputField'
import GradientBackground from '@components/layout/GradientBackground'

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
    return (
        <GradientBackground style={{ paddingInline: 25 }}>
            <CarrotLogo style={styles.logo} />

            <Text style={styles.mainTxt}>Sign Up</Text>
            <Text style={styles.ptxt}>Enter your credentials to continue</Text>


            <View style={styles.form}>
                <InputField
                    label='Username'
                    placeholder='Enter Username'

                />
                <InputField
                    label='Email'
                    type='email'
                    placeholder='Enter Email'

                />
                <InputField
                    label='Password'
                    type='password'
                    placeholder='Enter password'

                />

            </View>


            <Text style={styles.forgotPass}>By continuing you agree to our <Text style={styles.txthighlight}> Terms of Service</Text>  and <Text style={styles.txthighlight}> Privacy Policy</Text> </Text>
            <View style={styles.btnContainer}>
                <Button
                    title={"Sign Up"}
                />
            </View>
            <Text style={styles.ctatxt}>
                Already have an account? {" "}
                <Text style={styles.txthighlight}
                    onPress={() => navigation.replace("Login")}
                >
                    Login
                </Text>

            </Text>

        </GradientBackground>


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
        marginBottom: 30,
        fontSize: 14
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