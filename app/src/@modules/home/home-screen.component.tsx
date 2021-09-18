import * as Animatable from "react-native-animatable"

import { Div, Image, Text } from "react-native-magnus"
import { IMAGES, productsData } from "../../@shared/assets"

import CategoryShortcut from "../../@components/home/category-shotcut.component"
import HomeScreenCarousel from "../../@components/home/home-slider.component"
import { Icon } from "@ui-kitten/components"
import ProductsScrollList from "../../@components/home/products-scroll-list.component"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { ScrollView } from "react-native-gesture-handler"
import { StatusBar } from "react-native"
import WelcomeShortcut from "../../@components/home/welcome-shorcut.component"

interface IFProps {
	navigation: any
}
const HomeScreen: React.FC<IFProps> = ({ navigation }) => {
	return (
		<SafeAreaLayout>
			<StatusBar backgroundColor="#FF6347" barStyle="light-content" />
			<Animatable.View animation="fadeInDownBig">
				<Div
					h={120}
					style={{ paddingTop: StatusBar.currentHeight }}
					bg="#FF6347"
					alignItems="center">
					<Div
						w={"100%"}
						pl={15}
						pr={15}
						row
						justifyContent="space-between"
						alignItems="center">
						<Div row>
							<Image h={30} w={30} rounded="circle" source={IMAGES.logo} />
							<Text fontSize={24} ml={10} color="#fff" fontWeight="bold">
								Poshapets
							</Text>
						</Div>
						<Icon
							onPress={() =>
								navigation.navigate("Auth", {
									screen: Screens.SIGN_IN,
								})
							}
							style={{ width: 25, height: 25 }}
							fill="#fff"
							name="person-outline"
						/>
					</Div>
				</Div>
			</Animatable.View>
			<Animatable.View animation="fadeInDown">
				<WelcomeShortcut />
			</Animatable.View>
			<ScrollView>
				<Animatable.View animation="fadeInUp">
					<CategoryShortcut />
				</Animatable.View>
				<HomeScreenCarousel />
				<ProductsScrollList
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					title="Best Selling"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
				<ProductsScrollList
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					title="Offers"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
				<ProductsScrollList
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					title="Deals of the Day"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
			</ScrollView>
		</SafeAreaLayout>
	)
}

export default HomeScreen
