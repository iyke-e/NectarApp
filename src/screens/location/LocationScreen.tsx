import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LocationScreenProps } from '../../types/navigation'
import ArrowBack from "../../assets/svg/arrowback.svg"
import Button from '../../components/button/Button'
import Map from "../../assets/svg/map.svg"
import GradientBackground from '../../components/layout/GradientBackground'
import BackButton from '../../components/button/BackButton'
import AppText from '../../components/Text/AppText'
import { InputField, SelectField } from '../../components/input/InputField'
import ArrowDown from "../../assets/svg/selectArrow.svg"
import { theme } from '../../components/theme/theme'

const zones = ["North Central", "North West", "North East", "South West", "South East", "South South"
];
const areas = ["Port Harcourt GRA (Rivers)", "Diobu (Rivers)", "Warri (Delta)", "Uyo (Akwa Ibom)", "Calabar (Cross River)", "Benin City (Edo)", "Yenagoa (Bayelsa)", "Ikeja (Lagos)", "Victoria Island (Lagos)", "Lekki (Lagos)", "Ibadan North (Oyo)", "Akure (Ondo)", "Abeokuta (Ogun)", "Oshogbo (Osun)", "Ado-Ekiti (Ekiti)", "Maiduguri (Borno)",
    "Bauchi City (Bauchi)", "Yola (Adamawa)", "Jalingo (Taraba)", "Gombe City (Gombe)", "Damaturu (Yobe)"]


const LocationScreen: React.FC<LocationScreenProps> = ({ navigation }) => {

    const [selectArea, setSelectArea] = useState("")
    const [selectedZone, setSelectedZone] = useState("")



    return (
        <GradientBackground style={{ paddingInline: 25 }}>
            <BackButton onPress={() => navigation.goBack()} />

            <View style={styles.hero}>
                <Map style={styles.map} />
                <AppText type='header' style={{ textAlign: "center" }}>
                    Select Your Location
                </AppText>
                <AppText style={styles.ptxt}>
                    Switch on your location to stay in tune with
                    what’s happening in your area
                </AppText>
            </View>
            <View style={styles.selectSection}>
                <SelectField
                    label='Your Zone'
                    selected={selectedZone}
                    options={zones}
                    onSelectOption={(item: string) => { setSelectedZone(item) }}

                />
                <SelectField
                    label='Your Area'
                    selected={selectArea}
                    options={areas}
                    onSelectOption={(item: string) => { setSelectArea(item) }}

                />

            </View>
            <View style={styles.btnContainer}>
                <Button
                    title={"Submit"}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

        </GradientBackground >

    )
}

export default LocationScreen

const styles = StyleSheet.create({

    btnContainer: {
        marginBottom: 100,
        width: "100%",
        alignItems: "center",
    },
    hero: {
        flex: 1,
        alignItems: "center",
    },
    map: {
        marginBottom: 40,
    },

    ptxt: {
        textAlign: "center",
        marginTop: 15
    },


    selectSection: {
        gap: 30,
        marginBottom: 40,


    },
    selectContainer: {
        borderBottomWidth: 1,
        borderBlockColor: "#E2E2E2"
    },



})