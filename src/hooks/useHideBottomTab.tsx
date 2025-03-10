import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const useHideBottomTab = () => {


    const navigation = useNavigation()

    useEffect(() => {
        const parentNavigator = navigation.getParent()

        if (parentNavigator) {
            parentNavigator.setOptions({ tabBarStyle: { display: "none" } })
        }

        return () => {
            if (parentNavigator) {
                parentNavigator.setOptions({ tabBarStyle: undefined })
            }
        }
    }, [navigation])

}

export default useHideBottomTab

