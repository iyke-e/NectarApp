import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { CommonActions, getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '@screens/OnboardingScreen'
import SignInScreen from '@screens/SignInScreen';
import { RootStackParamList } from 'types/navigation';
import NumberScreen from '@screens/NumberScreen';
import VerificationScreen from '@screens/VerificationScreen';
import LocationScreen from '@screens/LocationScreen';
import LoginScreen from '@screens/LoginScreen';
import SignupScreen from '@screens/SignupScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '@screens/CartScreen';
import FavouriteScreen from '@screens/FavouriteScreen';
import AccountScreen from '@screens/AccountScreen';
import { theme } from '@components/theme/theme';
import { Icons } from '@assets/index';
import ExploreNavigation from './ExploreNavigation';
import ShopNavigation from './ShopNavigation';
import { Product } from '@components/layout/Product';
import CartNavigation from './CartNavigation';
import { useAuthContext } from '@hooks/useAuthContext';



const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator()

const getTabBarVisibility = (route: any) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

    if (["Product", "ProductDetails", "Filter", "PlaceOrder"].includes(routeName)) {
        return "none";
    }
    return "flex";
};


const MainApp = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarLabelStyle: {
                    fontSize: 14
                },
                tabBarItemStyle: {
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarStyle: {
                    backgroundColor: theme.color.white,
                    borderTopWidth: 0,
                    display: getTabBarVisibility(route),
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 92,
                    paddingTop: 15,

                },
                tabBarIcon: ({ focused }) => {
                    let iconName: any;

                    if (route.name === "Shop") {
                        iconName = focused ? <Icons.StoreActive /> : <Icons.Store />;
                    } else if (route.name === "Explore") {
                        iconName = focused ? <Icons.ExploreActive /> : <Icons.Explore />
                    } else if (route.name === "Cart") {
                        iconName = focused ? <Icons.CartActive /> : <Icons.Cart />
                    } else if (route.name === "Favourite") {
                        iconName = focused ? <Icons.FavouriteActive /> : <Icons.Favourite />
                    } else {
                        iconName = focused ? <Icons.AccountActive /> : <Icons.Account />
                    }

                    return iconName
                },
                tabBarActiveTintColor: theme.color.green,
                tabBarInactiveTintColor: theme.color.black,


            })}
        >
            <Tab.Screen
                name="Shop"
                component={ShopNavigation}
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: route.name }],
                        });
                    },
                })}
            />

            <Tab.Screen
                name='Explore'
                component={ExploreNavigation}
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: route.name }],
                        });
                    },
                })}
            />
            <Tab.Screen name='Cart'
                component={CartNavigation}
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.reset({
                            index: 0,
                            routes: [{ name: route.name }],
                        });
                    },
                })}
            />
            <Tab.Screen
                name='Favourite'
                component={FavouriteScreen}
            />
            <Tab.Screen name='Account' component={AccountScreen} />

        </Tab.Navigator>
    )

}



const Navigation = () => {

    const { isLoggedIn } = useAuthContext()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={isLoggedIn ? "MainApp" : "Onboarding"}
                screenOptions={{ headerShown: false }}>

                {
                    isLoggedIn ? (
                        <Stack.Screen
                            name='MainApp'
                            component={MainApp}

                        />
                    ) : (
                        <>
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
                        </>
                    )


                }


            </Stack.Navigator>

        </NavigationContainer >
    )
}

export default Navigation

