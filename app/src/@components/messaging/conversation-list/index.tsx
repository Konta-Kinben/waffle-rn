import {
	Input,
	Layout,
	List,
	StyleService,
	useStyleSheet,
} from "@ui-kitten/components"

import { ListRenderItemInfo } from "react-native"
import { Message } from "./extra/data"
import { MessageItem } from "./extra/message-item.component"
import React from "react"
import { Screens } from "../../../@shared/enums/ScreenNames.enum"
import { SearchIcon } from "./extra/icons"

const initialMessages: Message[] = [
	Message.howAreYou(),
	Message.canYouSend(),
	Message.noProblem(),
]

export default ({ navigation }): React.ReactElement => {
	const styles = useStyleSheet(themedStyles)
	const [searchQuery, setSearchQuery] = React.useState<string>()

	const onItemPress = (): void => {
		navigation && navigation.navigate(Screens.CHAT_SCREEN)
	}

	const renderItem = (
		info: ListRenderItemInfo<Message>
	): React.ReactElement => (
		<MessageItem
			style={styles.item}
			message={info.item}
			onPress={onItemPress}
		/>
	)

	const renderHeader = (): React.ReactElement => (
		<Layout style={styles.header} level="1">
			<Input
				placeholder="Search"
				value={searchQuery}
				accessoryRight={SearchIcon}
			/>
		</Layout>
	)

	return (
		<List
			style={styles.list}
			data={initialMessages}
			renderItem={renderItem}
			ListHeaderComponent={renderHeader}
		/>
	)
}

const themedStyles = StyleService.create({
	list: {
		flex: 1,
	},
	header: {
		paddingHorizontal: 16,
		paddingTop: 16,
		paddingBottom: 8,
	},
	item: {
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: "background-basic-color-3",
	},
})
