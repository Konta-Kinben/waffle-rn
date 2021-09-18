import { ArrowIosBackIcon, CartIcon } from "../../@shared/components/icons"
import {
	Icon,
	Input,
	StyleService,
	TopNavigation,
	TopNavigationAction,
	useStyleSheet,
} from "@ui-kitten/components"
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"

import CategoryShortcutItem from "../../@components/home/category-shotcut-item.component"
import { Dimensions } from "react-native"
import { Div } from "react-native-magnus"
import ProductsScrollList from "../../@components/home/products-scroll-list.component"
import React from "react"
import { SafeAreaLayout } from "../../@components/common/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { ScrollView } from "react-native-gesture-handler"
import { productsData } from "../../@shared/assets"
import { useNavigation } from "@react-navigation/native"

const giftIcon = (
	<MaterialCommunityIcons name="gift-outline" size={30} color="#fff" />
)
const categoryIcon = <MaterialIcons name="category" size={24} color="#fff" />
const orderIcon = (
	<MaterialCommunityIcons
		name="clipboard-list-outline"
		size={24}
		color="#fff"
	/>
)
const campaignIcon = <MaterialIcons name="campaign" size={24} color="#fff" />
const trackIcon = (
	<MaterialCommunityIcons
		name="truck-delivery-outline"
		size={24}
		color="#fff"
	/>
)

interface IFProps {}
const ECommerceHomeScreen: React.FC<IFProps> = ({}) => {
	const styles = useStyleSheet(themedStyles)
	const navigation = useNavigation()
	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)
	const renderRightAction = (): React.ReactElement => (
		<TopNavigationAction
			icon={CartIcon}
			onPress={() => navigation.navigate(Screens.CART_DRAWER)}
		/>
	)

	const renderIcon = (props) => <Icon {...props} name="search" />

	return (
		<SafeAreaLayout style={styles.container} insets="bottom">
			<TopNavigation
				title="Poshapets Shops"
				accessoryLeft={renderBackAction}
				accessoryRight={renderRightAction}
			/>
			<Div p={10}>
				<Input
					size="large"
					placeholder="What would your like to buy ?"
					accessoryLeft={renderIcon}
				/>
			</Div>
			<Div row mt={10} mb={10}>
				<CategoryShortcutItem
					shape="Circle"
					label="Gift Cards"
					backgroundColor={"#FF6347"}
					icon={giftIcon}
				/>
				<CategoryShortcutItem
					shape="Circle"
					label="Categories"
					backgroundColor={"#FF6347"}
					icon={categoryIcon}
				/>
				<CategoryShortcutItem
					shape="Circle"
					label="Orders"
					backgroundColor={"#FF6347"}
					icon={orderIcon}
				/>
				<CategoryShortcutItem
					shape="Circle"
					label="Campaigns"
					backgroundColor={"#FF6347"}
					icon={campaignIcon}
				/>
				<CategoryShortcutItem
					shape="Circle"
					label="Express"
					backgroundColor={"#FF6347"}
					icon={trackIcon}
				/>
			</Div>
			<ScrollView>
				<ProductsScrollList
					showRating={false}
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					size="small"
					title="Offers"
					subTitle="Delivery within 10 days!!"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
				<ProductsScrollList
					size="small"
					showRating={false}
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					title="Priority Store"
					subTitle="Priority Services!"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
				<ProductsScrollList
					size="small"
					showRating={false}
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					title="Recent"
					subTitle="Priority Services!"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
				<ProductsScrollList
					size="small"
					showRating={false}
					onPressViewAll={() => navigation.navigate(Screens.PRODUCTS_DRAWER)}
					title="Campaigns"
					subTitle="Priority Services!"
					products={productsData.sort(function () {
						return 0.5 - Math.random()
					})}
				/>
			</ScrollView>
		</SafeAreaLayout>
	)
}
export default ECommerceHomeScreen

const themedStyles = StyleService.create({
	container: {
		flex: 1,
		backgroundColor: "background-basic-color-2",
	},
	productList: {
		paddingHorizontal: 8,
		paddingVertical: 16,
	},
	productItem: {
		flex: 1,
		margin: 8,
		maxWidth: Dimensions.get("window").width / 2 - 24,
		backgroundColor: "background-basic-color-1",
	},
	itemHeader: {
		height: 140,
	},
	itemFooter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	iconButton: {
		paddingHorizontal: 0,
	},
})
