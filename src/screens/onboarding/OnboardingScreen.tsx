import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarrotLogo from "../../assets/svg/carrotwhite.svg"
import Button from '../../components/button/Button'
import { OnboardingScreenProps } from '../../types/navigation'

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../assets/Image/mainbgimg.png")}
            resizeMode='cover'
            style={styles.body}
        >
            <CarrotLogo width={49} height={56} />
            <Text style={styles.maintxt} >Welcome {"\n"} to our store</Text>
            <Text style={styles.ptxt}>Get your groceries as fast as one hour</Text>
            <View style={styles.btnContainer}>
                <Button
                    title={"Get Started"}
                    onPress={() => navigation.replace('Signin')}
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
        fontWeight: "semibold",
        textAlign: "center",
        color: "#fff",
        marginBlockStart: 35,
        marginBlockEnd: 10

    },
    ptxt: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 30,
    },
    btnContainer: {
        marginBottom: 100,
        width: "100%",
        alignItems: "center",
    }

})