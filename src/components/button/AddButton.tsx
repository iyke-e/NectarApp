import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icons } from '@assets/index'
import { theme } from '@components/theme/theme'

const AddButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icons.PlusWhite />
        </TouchableOpacity>
    )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.color.green,
        height: 46,
        width: 46,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 17
    }
})