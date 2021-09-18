import {
	ArrowIosBackIcon,
	BookmarkIcon,
	BookmarkOutlineIcon,
} from "../../@shared/components/icons"
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components"

import ContentView from "../../@components/ecommarce/product-details/index"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { StyleSheet } from "react-native"

const ProductDetailsScreen = ({ navigation }): React.ReactElement => {
	const [bookmarked, setBookmarked] = React.useState<boolean>(false)

	const onBookmarkActionPress = (): void => {
		setBookmarked(!bookmarked)
	}

	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	const renderBookmarkAction = (): React.ReactElement => (
		<TopNavigationAction
			icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon}
			onPress={onBookmarkActionPress}
		/>
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation
				title="Authority Flaked Entree"
				accessoryLeft={renderBackAction}
				accessoryRight={renderBookmarkAction}
			/>
			<ContentView navigation={navigation} />
		</SafeAreaLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ProductDetailsScreen
