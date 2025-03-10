import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Products } from 'data'
import AppText from '@components/Text/AppText'
import { theme } from '@components/theme/theme'
import { SearchInput } from '@components/input/InputField'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExploreStackParamList } from '@navigation/ExploreNavigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Body from '@components/layout/Body'

type ExploreStackNavigationProp = NativeStackNavigationProp<ExploreStackParamList>


const ExploreScreen = () => {
    const navigation = useNavigation<ExploreStackNavigationProp>()

    return (
        <Body>
            <View style={{ paddingHorizontal: 25 }}>
                <AppText type='header' style={styles.headText}>Find Products</AppText>
                <SearchInput />
            </View>


            <ScrollView contentContainerStyle={styles.listContainer}>
                {
                    Products.productCategory.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => { navigation.navigate("Product") }}
                                style={[styles.itemContainer, {
                                    backgroundColor: item.bgColor,
                                    borderColor: item.borderColor,
                                }]}>
                                <Image style={{ marginInline: "auto", height: 74, marginBottom: 37 }} source={item.image} />
                                <AppText style={styles.text} type='header'>{item.name}</AppText>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>

        </Body>


    )
}

export default ExploreScreen

const styles = StyleSheet.create({
    listContainer: {
        gap: 15,
        marginTop: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 18,
        width: "46%",
        height: 190,
        padding: 20
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: theme.fontFamily.GilroyBold
    },
    headText: {
        textAlign: "center",
        padding: 20,
        fontFamily: theme.fontFamily.GilroyBold,
        fontSize: 20
    }
})