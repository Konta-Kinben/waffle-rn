import {
	Avatar,
	Divider,
	Drawer,
	DrawerElement,
	DrawerItem,
	IndexPath,
	Layout,
	Text,
	Toggle,
} from "@ui-kitten/components"
import {
	BookIcon,
	ColorPaletteIcon,
	GridIcon,
	LayoutIcon,
	StarOutlineIcon,
} from "../../@shared/components/icons"
import React, { ReactElement, useState } from "react"
import { StyleSheet, View } from "react-native"

import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { ThemeContext } from "../../@shared/context"

export const HomeDrawer = ({ navigation }): DrawerElement => {
	const themeContext = React.useContext(ThemeContext)

	const [selectedIndex, setSelectedIndex] = useState<IndexPath>(null)

	const DATA = [
		{
			title: "Home",
			icon: GridIcon,
			onPress: () => {
				navigation.toggleDrawer()
				navigation.navigate(Screens.HOME_DRAWER)
			},
		},
		{
			title: "Libraries",
			icon: BookIcon,
			onPress: () => {
				navigation.toggleDrawer()
				navigation.navigate("Libraries")
			},
		},
		{
			title: "Layouts",
			icon: LayoutIcon,
			onPress: () => {
				navigation.toggleDrawer()
				navigation.navigate("Layouts")
			},
		},
		{
			title: "Components",
			icon: StarOutlineIcon,
			onPress: () => {
				navigation.toggleDrawer()
				navigation.navigate("Components")
			},
		},
		{
			title: "Themes",
			icon: ColorPaletteIcon,
			onPress: () => {
				navigation.toggleDrawer()
				navigation.navigate("Themes")
			},
		},
	]

	const renderHeader = (): ReactElement => (
		<SafeAreaLayout insets="top" level="2">
			<Layout style={styles.header} level="2">
				<View style={styles.profileContainer}>
					<Avatar
						size="giant"
						source={{ uri: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg" }}
					/>
					<Text style={styles.profileName} category="h6">
						Mickey
					</Text>
				</View>
			</Layout>
		</SafeAreaLayout>
	)

	const renderFooter = () => (
		<SafeAreaLayout insets="bottom">
			<React.Fragment>
				<Divider />
				<View style={styles.footer}>
					<View>
						<Toggle
							style={styles.evaToggle}
							checked={themeContext.theme === "dark"}
							onChange={themeContext.toggleTheme}>
							Dark Mode
						</Toggle>
					</View>
				</View>
			</React.Fragment>
		</SafeAreaLayout>
	)

	return (
		<Drawer
			header={renderHeader}
			footer={renderFooter}
			selectedIndex={selectedIndex}
			onSelect={(index) => setSelectedIndex(index)}>
			{DATA.map((el, index) => (
				<DrawerItem
					key={index}
					title={el.title}
					onPress={el.onPress}
					accessoryLeft={el.icon}
				/>
			))}
		</Drawer>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	header: {
		height: 128,
		paddingHorizontal: 16,
		justifyContent: "center",
	},
	footer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginLeft: 16,
	},
	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileName: {
		marginHorizontal: 16,
	},
	evaToggle: {
		margin: 8,
		alignSelf: "flex-end",
		flexDirection: "row-reverse",
	},
})
