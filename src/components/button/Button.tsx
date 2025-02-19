import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'

interface ButtonPros extends TouchableOpacityProps {
    title: String;
}

const Button: React.FC<ButtonPros> = ({ title, style, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, style]}
            onPress={onPress}
        >
            <Text style={styles.btnTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#53B175",
        width: "100%",
        height: 67,
        maxWidth: 353,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center"

    },
    btnTxt: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "semibold"
    }
})