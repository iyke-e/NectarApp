import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { VerficationScreenProps } from '../../types/navigation'
import ArrowBack from "../../assets/svg/arrowback.svg"
import RoundBtn from '../../components/button/RoundBtn'


const VerificationScreen: React.FC<VerficationScreenProps> = ({ navigation }) => {
    const [code, setCode] = useState()

    return (
        <View style={styles.body}>

            <TouchableOpacity style={styles.backBtn}
                onPress={() => navigation.navigate('Signup')}
            >
                <ArrowBack />
            </TouchableOpacity>

            <View style={styles.main}>
                <Text style={styles.mainTxt}>Enter your 4-digit code</Text>

                <View style={styles.phoneNoContainer}>
                    <Text style={styles.ptxt}>code</Text>

                    <TextInput
                        value={code}
                        onChange={() => { setCode }}
                        maxLength={4}
                        keyboardType='numeric'
                        placeholder='xxxx'
                        style={styles.inputText}


                    />

                </View>

            </View>
            <View style={styles.navigateContainer}>
                <TouchableOpacity>
                    <Text>Resend Code</Text>
                </TouchableOpacity>

                <RoundBtn onPress={() => navigation.navigate("Location")} />
            </View>

        </View>
    )
}

export default VerificationScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        paddingInline: 25
    },
    topImg: {
        height: 233,
        position: "absolute",
        top: 0
    },
    backBtn: {
        marginBlockStart: 25,
        marginBlockEnd: 65
    },
    main: {
        flex: 1,

    },
    mainTxt: {
        fontSize: 26,
        color: "#181725",
        marginBottom: 28
    },
    ptxt: {
        fontSize: 16,
        color: "#7C7C7C"
    },
    phoneNoContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#E2E2E2",
        marginBottom: 40
    },
    inputText: {
        color: "#181725",
        fontSize: 16,
    },
    navigateContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    }

})