import { StyleSheet, TextStyle, TouchableOpacity, View } from "react-native"

import React from "react"
import { Text } from "@ui-kitten/components"

interface IFProps {
	backgroundColor: string
	icon: any
	label?: string
	shape?: "rounded" | "Circle"
	titleStyle?: TextStyle
}
const CategoryShortcutItem: React.FC<IFProps> = ({
	backgroundColor,
	icon,
	label,
	shape = "rounded",
	titleStyle,
}) => {
	return (
		<TouchableOpacity
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<View
				style={[
					styles.shadow,
					{
						width: 50,
						height: 50,
						backgroundColor: backgroundColor,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",

						borderRadius: shape === "rounded" ? 10 : 30,
					},
				]}>
				{icon}
			</View>
			<Text
				category="s2"
				style={[{ fontWeight: "500", marginTop: 5 }, titleStyle]}>
				{label}
			</Text>
		</TouchableOpacity>
	)
}

export default CategoryShortcutItem

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
})
