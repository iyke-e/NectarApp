import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CarrotLogo from '../../assets/svg/orangecarrot.svg'
import Button from '../../components/button/Button'
import { Link } from '@react-navigation/native'
import { LoginScreenProps } from '../../types/navigation'

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
            <CarrotLogo style={styles.logo} />

            <Text style={styles.mainTxt}>Login</Text>
            <Text style={styles.ptxt}>Enter your Email and password</Text>

            <View style={styles.form}>
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
                        placeholder="Enter password"
                        style={styles.inputField}
                        placeholderTextColor="#7C7C7C"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                    />
                </View>
            </View>

            <Text style={styles.forgotPass}>Forgot Password?</Text>
            <View style={styles.btnContainer}>
                <Button
                    title={"Log in"}

                />
            </View>
            <Text style={styles.ctatxt}>
                Don't have an account? {" "}
                <Text style={styles.txthighlight} onPress={() => navigation.replace("Signup")}>
                    Signup
                </Text>

            </Text>

        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    body: {
        paddingInline: 25
    },
    logo: {
        marginInline: "auto",
        marginBlockStart: 30,
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
    },
    txthighlight: {
        color: "#53B175"
    }
})