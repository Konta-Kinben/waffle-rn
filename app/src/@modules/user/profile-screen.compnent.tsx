import { TopNavigation, TopNavigationAction } from "@ui-kitten/components"

import { ArrowIosBackIcon } from "../../@shared/components/icons"
import ContentView from "../../@components/social/profile/index"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { StyleSheet } from "react-native"

export const ProfileScreen = ({ navigation }): React.ReactElement => {
	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation title="Profile" accessoryLeft={renderBackAction} />
			<ContentView navigation={navigation} />
		</SafeAreaLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
