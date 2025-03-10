import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '@components/Text/AppText'
import { Icons } from '@assets/index'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ExploreStackParamList } from '@navigation/ExploreNavigation'
import { theme } from '@components/theme/theme'

type HeadingProps = {
    title: string,
    back?: boolean,
    filter?: boolean,
    close?: boolean
}

type HeadingNavigationProps = NativeStackNavigationProp<ExploreStackParamList>

const Heading: React.FC<HeadingProps> = ({ title, back, filter, close }) => {
    const navigation = useNavigation<HeadingNavigationProps>()

    return (
        <View style={styles.container}>
            <TouchableOpacity hitSlop={{ right: 20, left: 20, top: 20, bottom: 20 }} onPress={() => { navigation.goBack() }} style={styles.leftIcon}>
                {back && <Icons.ArrowBack />}
                {close && <Icons.Close />}
            </TouchableOpacity>


            <AppText style={styles.text} type='header'>{title}</AppText>

            <TouchableOpacity hitSlop={{ right: 20, left: 20, top: 20, bottom: 20 }} onPress={() => { navigation.navigate("Filter") }} style={styles.rightIcon}>
                {filter && <Icons.Filter />}

            </TouchableOpacity>



        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    text: {
        textAlign: "center",
        fontFamily: theme.fontFamily.GilroyBold
    },
    leftIcon: {
        position: "absolute",
        left: 25,
        top: "50%",
        transform: [{
            translateY: "50%"
        }]
    },
    rightIcon: {
        position: "absolute",
        right: 25,
        top: "50%",
        transform: [{
            translateY: "50%"
        }]
    }
})