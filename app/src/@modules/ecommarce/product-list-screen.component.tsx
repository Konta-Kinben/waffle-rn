import {
	List,
	StyleService,
	TopNavigation,
	TopNavigationAction,
	useStyleSheet,
} from "@ui-kitten/components"

import { ArrowIosBackIcon } from "../../@shared/components/icons"
import { Dimensions } from "react-native"
import Product from "../../@components/home/product.component"
import React from "react"
import { SafeAreaLayout } from "../../@components/common/safe-area-layout.component"
import { productsData } from "../../@shared/assets"
import { useNavigation } from "@react-navigation/native"

interface IFProps {}
const ProductListScreen: React.FC<IFProps> = ({}) => {
	const styles = useStyleSheet(themedStyles)
	const navigation = useNavigation()
	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation title="All Products" accessoryLeft={renderBackAction} />
			<List
				contentContainerStyle={styles.productList}
				data={productsData.sort(function () {
					return 0.5 - Math.random()
				})}
				numColumns={2}
				renderItem={(item: any) => (
					<Product product={item.item} key={item.id} />
				)}
			/>
		</SafeAreaLayout>
	)
}
export default ProductListScreen

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
