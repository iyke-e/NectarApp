import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ArrowBack from "@assets/svg/arrowback.svg"
import RoundBtn from '@components/button/RoundBtn'
import { NumberScreenProps } from 'types/navigation'
import GradientBackground from '@components/layout/GradientBackground'
import AppText from '@components/Text/AppText'
import { InputField } from '@components/input/InputField'
import BackButton from '@components/button/BackButton'


const NumberScreen: React.FC<NumberScreenProps> = ({ navigation }) => {

    const [phoneNo, setPhoneNo] = useState("")


    return (
        <GradientBackground style={{ paddingInline: 25 }}>
            <BackButton onPress={() => navigation.goBack()} />


            <View style={{ flex: 1 }}>
                <AppText style={{ marginBottom: 28 }} type='header'>Enter your mobile number</AppText>

                <InputField label={"Mobile Number"}
                    icon={<Image source={require("@assets/Image/flag.png")} />}
                    keyboardType='numeric'
                    inputMode='numeric'
                    value={phoneNo}
                    onChangeText={(text) => setPhoneNo(text)}

                />
            </View>
            <View style={{ alignItems: "flex-end" }}>
                <RoundBtn onPress={() => navigation.navigate("Verification")} />

            </View>

        </GradientBackground>

    )
}

export default NumberScreen

const styles = StyleSheet.create({






    navigationContainer: {
        alignItems: "flex-end"
    }

})