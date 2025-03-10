import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { theme } from '../theme/theme';

interface ButtonPros extends TouchableOpacityProps {
    title: String;
    textStyle?: any
}

const Button: React.FC<ButtonPros> = ({ title, style, onPress, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, style]}
            onPress={onPress}
        >
            <Text style={[styles.btnTxt, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: theme.color.green,
        width: "100%",
        height: 67,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center"

    },
    btnTxt: {
        fontSize: 18,
        color: "#FFF9FF",
        fontFamily: theme.fontFamily.GilroySemibold
    }
})