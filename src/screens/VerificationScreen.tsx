import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { VerficationScreenProps } from '../types/navigation'
import RoundBtn from '@components/button/RoundBtn'
import GradientBackground from '@components/layout/GradientBackground'
import BackButton from '@components/button/BackButton'
import AppText from '@components/Text/AppText'
import { InputField } from '@components/input/InputField'
import { theme } from '@components/theme/theme'


const VerificationScreen: React.FC<VerficationScreenProps> = ({ navigation }) => {
    const [code, setCode] = useState("")

    return (
        <GradientBackground style={{ paddingInline: 25 }}>
            <BackButton onPress={() => navigation.goBack()} />

            <View style={{ flex: 1 }}>
                <AppText style={{ marginBottom: 28 }} type='header'>Enter your 4-digit code</AppText>

                <InputField label={"Code"}
                    placeholder='- - - -'
                    keyboardType='numeric'
                    inputMode='numeric'
                    value={code}
                    onChangeText={(text) => setCode(text)}
                    maxLength={4}

                />
            </View>


            <View style={styles.navigateContainer}>
                <TouchableOpacity>
                    <Text style={styles.txthightlight}>Resend Code</Text>
                </TouchableOpacity>

                <RoundBtn onPress={() => navigation.navigate("Location")} />
            </View>


        </GradientBackground>

    )
}

export default VerificationScreen

const styles = StyleSheet.create({

    navigateContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    txthightlight: {
        color: theme.color.green,
        fontFamily: theme.fontFamily.GilroyMedium,
        fontSize: theme.fontSizes.medium
    }

})