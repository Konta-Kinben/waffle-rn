import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"

import { HomeBottomNavigation } from "./home-bottom-navigation.component"
import Profile from "../../@features/profile/Profile"
import React from "react"
import { Screens } from "../enums"
import SignIn2 from "../../@features/auth/sign-in-2/index"
import { createStackNavigator } from "@react-navigation/stack"

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

const ROOT_ROUTES: string[] = [
	Screens.HOME,
	Screens.PROFILE,
	Screens.SIGN_IN,
	Screens.SIGN_UP,
]

const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
	// const isNestedRoute: boolean = route.state?.index > 0
	const isRootRoute: boolean = ROOT_ROUTES.includes(route.name)

	return { tabBarVisible: isRootRoute }
}

const HomeTabsNavigator = (): React.ReactElement => (
	<BottomTab.Navigator
		screenOptions={TabBarVisibilityOptions}
		initialRouteName={Screens.HOME}
		tabBar={(props) => <HomeBottomNavigation {...props} />}>
		<BottomTab.Screen name={Screens.HOME} component={Profile} />
		<BottomTab.Screen name={Screens.PROFILE} component={Profile} />
		<BottomTab.Screen name={Screens.PROFILE + 1} component={Profile} />
		<BottomTab.Screen name={Screens.SIGN_IN} component={SignIn2} />
	</BottomTab.Navigator>
)

export const HomeNavigator = (): React.ReactElement => (
	<Stack.Navigator
		screenOptions={{ gestureEnabled: false, headerShown: false }}>
		<Stack.Screen name={"Screens.HOME_DRAWER"} component={HomeTabsNavigator} />
		<Stack.Screen name={"Screens.HOME_DRAWER1"} component={Profile} />
	</Stack.Navigator>
)
