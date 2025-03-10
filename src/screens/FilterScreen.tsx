import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icons } from '@assets/index'
import AppText from '@components/Text/AppText'
import Button from '@components/button/Button'
import { theme } from '@components/theme/theme'
import Heading from '@components/layout/Heading'

const data = {
    categories: ["Egg", "Noodles & Pasta", "Chips & Crisps", "Fast Food"],
    brand: ["Individual Collection", "Cocacola", "Ifad", "Kazi Farmas"],

}

const Options = ({ option, checked }: { option: string, checked?: boolean }) => {
    return (
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            {checked ? <Icons.GreenCheckBox /> : <Icons.EmptyCheckBox />}
            <AppText style={{ color: theme.color.darkBlue }}>{option}</AppText>
        </View>
    )
}

const FilterScreen = () => {
    return (
        <SafeAreaView style={styles.body}>
            <Heading title='Filter' close />
            <View style={styles.filterContainer}>
                <View style={styles.filterbox}>
                    <View style={{ marginBottom: 30 }}>
                        <AppText type='header'>Categories</AppText>
                        <View style={{ gap: 20, marginTop: 20 }}>
                            {
                                data.categories.map((item, index) => {
                                    return (<Options key={index} option={item} checked={index === 0 && true} />)
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <AppText type='header'>Brand</AppText>
                        <View style={{ gap: 20, marginTop: 20 }}>
                            {
                                data.brand.map((item, index) => {
                                    return (<Options key={index} option={item} checked={index === 1 && true} />)
                                })
                            }
                        </View>

                    </View>
                </View>
                <Button title={"Apply Filter"}></Button>

            </View>

        </SafeAreaView>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    filterbox: {
        flex: 1

    },
    filterContainer: {
        backgroundColor: "#F2F3F2",
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 25
    }
})