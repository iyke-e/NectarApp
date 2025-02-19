import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PhoneInput from 'react-native-phone-number-input'
import ArrowBack from "../../assets/svg/arrowback.svg"
import RoundBtn from '../../components/button/RoundBtn'
import { NumberScreenProps } from '../../types/navigation'


const NumberScreen: React.FC<NumberScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.body}>

            <TouchableOpacity style={styles.backBtn}
                onPress={() => navigation.navigate('Number')}
            >
                <ArrowBack />
            </TouchableOpacity>

            <View style={styles.main}>
                <Text style={styles.mainTxt}>Enter your mobile number</Text>

                <View style={styles.phoneNoContainer}>
                    <Text style={styles.ptxt}>Mobile Number</Text>

                    <PhoneInput
                        textContainerStyle={{ backgroundColor: "#fff" }}
                        defaultCode='NG'
                    />

                </View>

            </View>
            <View style={styles.navigationContainer}>
                <RoundBtn onPress={() => navigation.navigate("Verification")} />

            </View>
        </View>
    )
}

export default NumberScreen

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
    navigationContainer: {
        alignItems: "flex-end"
    }

})