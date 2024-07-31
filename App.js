import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import CategoryScreen from "./screens/CategoryScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoriteScreen from "./screens/FavoriteScreen";
// import FavoriteContextProvider from "./store/context/favorite-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabBar = createBottomTabNavigator();

function DrawerNavigation() {
    return <Drawer.Navigator
        screenOptions={{
            headerStyle: { background: '#351401' },
            headerTintColor: 'white',
            sceneContainerStyle: { backgroundColor: '#3f2f35' },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerLabelStyle: 'white',
            drawerActiveTintColor: '#351401',
        }}
    >
        <Drawer.Screen name="Categories" component={CategoryScreen} options={{
            title: "Categories",
            drawerIcon: () => <Ionicons name="list" size={24} color="white" />
        }} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
            title: "Favorites",
            drawerIcon: () => <Ionicons name="heart" size={24} color="white" />
        }} />
    </Drawer.Navigator>
}

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [loaded, error] = useFonts({
        "product-sans-regular": require("./assets/fonts/product-sans-regular.ttf"),
        "product-sans-bold": require("./assets/fonts/product-sans-bold.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <StatusBar style="light" />
            {/* <FavoriteContextProvider> */}
            <Provider store={ store }>
                <NavigationContainer>
                    <BottomTabBar.Navigator
                        screenOptions={{
                            headerStyle: { background: '#351401' },
                            headerTintColor: 'white',
                            contentStyle: { backgroundColor: '#3f2f35' }
                        }}>
                        <Stack.Screen
                            name="Drawer"
                            component={DrawerNavigation}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="MealOverview"
                            component={MealOverviewScreen}
                            options={{}}
                        />
                        <Stack.Screen
                            name="MealDetails"
                            component={MealDetailScreen}
                            options={{}}
                        />
                    </BottomTabBar.Navigator>
                </NavigationContainer>
            </Provider>
            {/* </FavoriteContextProvider> */}
        </>
    );
}

const styles = StyleSheet.create({});
