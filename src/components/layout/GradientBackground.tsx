import { ImageBackground, StatusBar, StyleSheet, Text, View, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'

interface GradientBackgroundProps extends ViewProps {
    children: ReactNode
}



const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, style, ...props }) => {
    return (
        <ImageBackground

            style={[styles.bg, style]}
            source={require("@assets/Image/gradientBg.png")}
            resizeMode='cover'
            {...props}
        >
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            {children}

        </ImageBackground>
    )
}

export default GradientBackground

const styles = StyleSheet.create({
    bg: {
        flex: 1,

    }
})