import { Image, StyleSheet, TouchableOpacity } from "react-native"
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components"

import { ArrowIosBackIcon } from "../../@shared/components/icons"
import ContentView from "../../@components/messaging/chat/index"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"

const ChatScreen = ({ navigation }): React.ReactElement => {
	const onProfileActionPress = (): void => {
		navigation.navigate(Screens.PROFILE_SCREEN)
	}

	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)

	const renderProfileAction = (): React.ReactElement => (
		<TopNavigationAction
			icon={renderProfileImage}
			onPress={onProfileActionPress}
		/>
	)

	const renderProfileImage = (): React.ReactElement => (
		<TouchableOpacity onPress={onProfileActionPress}>
			<Image
				style={styles.profileImage}
				source={{ uri: "https://i.ibb.co/JzL7BPL/image-profile-3.jpg" }}
			/>
		</TouchableOpacity>
	)

	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation
				title="Helen Kuper"
				subtitle="Last seen just now"
				accessoryLeft={renderBackAction}
				accessoryRight={renderProfileAction}
			/>
			<ContentView />
		</SafeAreaLayout>
	)
}
export default ChatScreen
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
