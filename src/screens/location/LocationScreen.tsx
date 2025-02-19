import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LocationScreenProps } from '../../types/navigation'
import ArrowBack from "../../assets/svg/arrowback.svg"
import Button from '../../components/button/Button'
import Map from "../../assets/svg/map.svg"
import { Picker } from '@react-native-picker/picker'

const LocationScreen: React.FC<LocationScreenProps> = ({ navigation }) => {


    return (
        <View style={styles.body}>

            <TouchableOpacity style={styles.backBtn}
                onPress={() => navigation.navigate('Signup')}
            >
                <ArrowBack />
            </TouchableOpacity>

            <View style={styles.hero}>
                <Map style={styles.map} />

                <Text style={styles.mainTxt}>
                    Select Your Location
                </Text>
                <Text style={styles.ptxt}>Switch on your location to stay in tune with
                    what’s happening in your area
                </Text>


            </View>
            <View style={styles.selectSection}>
                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Your Zone</Text>
                    <Picker style={styles.selectPicker} placeholder={"Select your Zone"} >
                        <Picker.Item label='Java' value={"java"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />

                    </Picker>
                </View>
                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Your Area</Text>
                    <Picker style={styles.selectPicker} placeholder='Types of you area'>
                        <Picker.Item label='Java' value={"java"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />
                        <Picker.Item label='John' value={"john"} />

                    </Picker>
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button
                    title={"Submit"}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
        paddingInline: 25
    },
    topImg: {
        height: 233,
        position: "absolute",
        top: 0
    },
    backBtn: {
        marginBlockStart: 25,
        marginBlockEnd: 65
    },
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
    mainTxt: {
        fontSize: 26,
        fontWeight: "semibold",
        marginBottom: 15

    },
    ptxt: {
        color: "#7C7C7C",
        fontSize: 16,
        textAlign: "center"

    },
    label: {
        fontSize: 16,
        fontWeight: "semibold",
        color: "#7C7C7C"
    },
    selectPicker: {
        color: "#181725"
    },
    selectSection: {
        gap: 30,
        marginBottom: 40,


    },
    selectContainer: {
        borderBottomWidth: 1,
        borderBlockColor: "#E2E2E2"
    }

})