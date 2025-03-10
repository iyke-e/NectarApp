import { StyleSheet, Text, View } from 'react-native'
import ArrowBack from '../../assets/svg/arrowback.svg'
import React from 'react'
import { SvgProps } from 'react-native-svg'

interface BackButtonProps extends SvgProps {
    style?: any
}

const BackButton: React.FC<BackButtonProps> = ({ style, ...props }) => {
    return (
        <ArrowBack hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={[style, styles.backBtn]}
            {...props}
        />

    )
}

export default BackButton

const styles = StyleSheet.create({
    backBtn: {
        marginBlockStart: 25,
        marginBlockEnd: 65
    },
})