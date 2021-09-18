import { ArrowIosBackIcon, SearchIcon } from "../../@shared/components/icons"
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components"

import ContentView from "../../@components/ecommarce/shopping-cart/index"
import React from "react"
import { SafeAreaLayout } from "../../@components/common/safe-area-layout.component"
import { StyleSheet } from "react-native"

const ShoppingCartScreen = ({ navigation }): React.ReactElement => {
	const onSearchActionPress = (): void => {
		navigation.navigate("ProductList")
	}

	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	const renderSearchAction = (): React.ReactElement => (
		<TopNavigationAction icon={SearchIcon} onPress={onSearchActionPress} />
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation
				title="Shopping Cart"
				accessoryLeft={renderBackAction}
				accessoryRight={renderSearchAction}
			/>
			<ContentView />
		</SafeAreaLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ShoppingCartScreen
