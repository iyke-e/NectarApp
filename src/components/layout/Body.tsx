import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '@components/theme/theme'

const Body = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaView style={styles.body}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 25 }}>
                    {children}

                </View>

            </ScrollView>
        </SafeAreaView >
    )
}

export default Body

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: theme.color.white,
    },
})