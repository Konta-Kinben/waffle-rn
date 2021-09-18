import {
	Divider,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components"

import { ArrowIosBackIcon } from "../../@shared/components/icons"
import ContentView from "../../@components/messaging/conversation-list/index"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { StyleSheet } from "react-native"

const ConversationListScreen = ({ navigation }): React.ReactElement => {
	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation title="Messages" accessoryLeft={renderBackAction} />
			<Divider />
			<ContentView navigation={navigation} />
		</SafeAreaLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default ConversationListScreen
