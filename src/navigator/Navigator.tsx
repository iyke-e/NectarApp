import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen'
import SignInScreen from '../screens/signin/SignInScreen';
import { RootStackParamList } from '../types/navigation';
import NumberScreen from '../screens/number/NumberScreen';
import VerificationScreen from '../screens/verification/VerificationScreen';
import LocationScreen from '../screens/location/LocationScreen';
import LoginScreen from '../screens/login/LoginScreen';
import SignupScreen from '../screens/signup/SignupScreen';



const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Onboarding'
                screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Onboarding'
                    component={OnboardingScreen} />
                <Stack.Screen
                    name='Signin'
                    component={SignInScreen}
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen
                    name='Number'
                    component={NumberScreen}

                />
                <Stack.Screen
                    name='Verification'
                    component={VerificationScreen}

                />
                <Stack.Screen
                    name='Location'
                    component={LocationScreen}

                />
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}

                />
                <Stack.Screen
                    name='Signup'
                    component={SignupScreen}

                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})