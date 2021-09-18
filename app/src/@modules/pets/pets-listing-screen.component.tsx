import { TopNavigation, TopNavigationAction } from "@ui-kitten/components"

import { ArrowIosBackIcon } from "../../@shared/components/icons"
import ContentView from "../../@components/messaging/chat/index"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { StyleSheet } from "react-native"

const PetListingScreen = ({ navigation }): React.ReactElement => {
	const onProfileActionPress = (): void => {
		navigation.navigate(Screens.PROFILE_SCREEN)
	}

	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation title="My Pets" accessoryLeft={renderBackAction} />
			<ContentView />
		</SafeAreaLayout>
	)
}
export default PetListingScreen
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	profileImage: {
		width: 32,
		height: 32,
		borderRadius: 16,
		// tintColor: null,
	},
})
