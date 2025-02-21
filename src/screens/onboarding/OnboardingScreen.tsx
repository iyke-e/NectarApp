import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarrotLogo from "../../assets/svg/carrotwhite.svg"
import Button from '../../components/button/Button'
import { OnboardingScreenProps } from '../../types/navigation'
import { theme } from '../../components/theme/theme'

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../assets/Image/mainbgimg.png")}
            resizeMode='cover'
            style={styles.body}
        >
            <CarrotLogo width={49} height={56} />
            <Text style={styles.maintxt} >Welcome{"\n"}to our store</Text>
            <Text style={styles.ptxt}>Get your groceries as fast as one hour</Text>
            <View style={styles.btnContainer}>
                <Button
                    title={"Get Started"}
                    onPress={() => navigation.navigate('Signin')}
                />
            </View>
        </ImageBackground>




    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "100%"
    },
    maintxt: {
        fontSize: 48,
        textAlign: "center",
        color: "#fff",
        marginBlockStart: 35,
        marginBlockEnd: 10,
        fontFamily: "Gilroy-SemiBold",


    },
    ptxt: {
        fontSize: 16,
        color: theme.color.grayishWhite,
        marginBottom: 40,
        fontFamily: theme.fontFamily.GilroyMedium,

    },
    btnContainer: {
        marginBottom: 80,
        width: "100%",
        alignItems: "center",
    }

})