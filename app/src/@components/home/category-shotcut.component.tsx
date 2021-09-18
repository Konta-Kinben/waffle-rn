import {
	Feather,
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons"
import { StyleService, useStyleSheet } from "@ui-kitten/components"

import CategoryShortcutItem from "./category-shotcut-item.component"
import { Div } from "react-native-magnus"
import React from "react"
import { View } from "react-native"

const CategoryShortcut = () => {
	const styles = useStyleSheet(themedStyles)

	return (
		<View
			style={[styles.container, { flexDirection: "column", marginTop: 20 }]}>
			<Div row justifyContent="space-between">
				<CategoryShortcutItem
					label="Appointment"
					backgroundColor={"#FF6347"}
					icon={i1}
				/>

				<CategoryShortcutItem
					label="Reminder"
					backgroundColor={"#FF6347"}
					icon={i2}
				/>

				<CategoryShortcutItem
					label="Tracking"
					backgroundColor={"#FF6347"}
					icon={i3}
				/>

				<CategoryShortcutItem
					label="Book Service"
					backgroundColor={"#FF6347"}
					icon={i4}
				/>
			</Div>
			<Div row justifyContent="space-between" mt={20}>
				<CategoryShortcutItem
					label="Find Pets"
					backgroundColor={"#FF6347"}
					icon={i5}
				/>

				<CategoryShortcutItem
					label="Activity Record"
					backgroundColor={"#FF6347"}
					icon={i6}
				/>
				<CategoryShortcutItem
					label="Pets"
					backgroundColor={"#FF6347"}
					icon={i7}
				/>

				<CategoryShortcutItem
					label="Referral"
					backgroundColor={"#FF6347"}
					icon={i8}
				/>
			</Div>
		</View>
	)
}

export default CategoryShortcut

const i1 = (
	<MaterialCommunityIcons name="calendar-clock" size={30} color="white" />
)
const i2 = <MaterialCommunityIcons name="history" size={30} color="white" />
const i3 = <MaterialIcons name="track-changes" size={30} color="white" />
const i4 = <MaterialIcons name="book-online" size={30} color="white" />
const i5 = <MaterialIcons name="pets" size={30} color="white" />
const i6 = <Feather name="activity" size={30} color="white" />
const i7 = <Ionicons name="md-list-circle-outline" size={30} color="white" />
const i8 = <FontAwesome5 name="users-cog" size={30} color="white" />

const themedStyles = StyleService.create({
	container: {
		backgroundColor: "background-basic-color-1",
	},
})
