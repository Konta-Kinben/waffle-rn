import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"

import AddNewCardScreen from "../../@modules/ecommarce/add-new-card.component"
import { AuthNavigators } from "../../@modules/auth/screens"
import ChatScreen from "../../@modules/messaging/chat.component"
import ConversationListScreen from "../../@modules/messaging/conversation-list.component"
import ECommerceHomeScreen from "../../@modules/ecommarce/ecommarce-home-screen.component"
import FeedScreen from "../../@modules/social/feed-screen.component"
import { HomeBottomNavigation } from "../../@modules/home/home-bottom-navigation.component"
import HomeScreen from "../../@modules/home/home-screen.component"
import MenuScreen from "../../@modules/user/menu-screen.component"
import { PaymentScreen } from "../../@modules/ecommarce/payment.component"
import PostDetailsScreen from "../../@modules/social/post-details-screen.component"
import ProductDetailsScreen from "../../@modules/ecommarce/product-detail-screen.component"
import ProductListScreen from "../../@modules/ecommarce/product-list-screen.component"
import { ProfileScreen } from "../../@modules/user/profile-screen.compnent"
import ProfileUpdateScreen from "../../@modules/user/profile-update-screen.component"
import React from "react"
import { Screens } from "../enums/ScreenNames.enum"
import ShoppingCartScreen from "../../@modules/ecommarce/shopping-cart.component"
import SwipeProfileScreen from "../../@modules/social/swipe-profile.component"
import { createStackNavigator } from "@react-navigation/stack"

const BottomTab = createBottomTabNavigator()
const Stack = createStackNavigator()

const ROOT_ROUTES: string[] = [
	Screens.HOME_TABS,
	Screens.FEED_SCREEN,
	Screens.ECOMMARCE_HOME,
	Screens.PROFILE_TABS,
]

const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
	// const isNestedRoute: boolean = route.state?.index > 0
	const isRootRoute: boolean = ROOT_ROUTES.includes(route.name)

	return { tabBarVisible: isRootRoute }
}

const HomeTabsNavigator = (): React.ReactElement => (
	<BottomTab.Navigator
		screenOptions={TabBarVisibilityOptions}
		initialRouteName={Screens.HOME_TABS}
		tabBar={(props) => <HomeBottomNavigation {...props} />}>
		<BottomTab.Screen name={Screens.HOME_TABS} component={HomeScreen} />
		<BottomTab.Screen name={Screens.FEED_SCREEN} component={FeedScreen} />
		<BottomTab.Screen
			name={Screens.ECOMMARCE_HOME}
			component={ECommerceHomeScreen}
		/>
		<BottomTab.Screen name={Screens.PROFILE_TABS} component={MenuScreen} />
	</BottomTab.Navigator>
)

export const HomeNavigator = (): React.ReactElement => (
	<Stack.Navigator screenOptions={{ gestureEnabled: false }} headerMode="none">
		<Stack.Screen name={Screens.HOME_DRAWER} component={HomeTabsNavigator} />

		<Stack.Screen name={Screens.CART_DRAWER} component={ShoppingCartScreen} />

		<Stack.Screen
			name={Screens.PRODUCTS_DRAWER}
			component={ProductListScreen}
		/>
		<Stack.Screen
			name={Screens.PRODUCT_DETAILS_DRAWER}
			component={ProductDetailsScreen}
		/>
		<Stack.Screen name={Screens.PROFILE_DRAWER} component={MenuScreen} />

		<Stack.Screen name={Screens.PAYMENT} component={PaymentScreen} />
		<Stack.Screen name={Screens.ADD_NEW_CARD} component={AddNewCardScreen} />
		<Stack.Screen name={Screens.PROFILE_SCREEN} component={ProfileScreen} />
		<Stack.Screen
			name={Screens.PROFILE_UPDATE_SCREEN}
			component={ProfileUpdateScreen}
		/>
		<Stack.Screen name={Screens.CHAT_SCREEN} component={ChatScreen} />
		<Stack.Screen
			name={Screens.CONVERSATION_LIST_SCREEN}
			component={ConversationListScreen}
		/>
		<Stack.Screen name={Screens.SWIPE_SCREEN} component={SwipeProfileScreen} />
		<Stack.Screen
			name={Screens.POST_DETAILS_SCREEN}
			component={PostDetailsScreen}
		/>
		<Stack.Screen name={`Auth`} component={AuthNavigators} />
	</Stack.Navigator>
)
