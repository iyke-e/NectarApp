import { StyleSheet, Text, View } from 'react-native'
import ArrowBack from '../../assets/svg/arrowback.svg'
import React from 'react'

const BackButton = () => {
    return (
        <ArrowBack hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles} />

    )
}

export default BackButton

const styles = StyleSheet.create({})