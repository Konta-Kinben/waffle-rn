import {
	Avatar,
	Icon,
	IconElement,
	Layout,
	ListItem,
	StyleService,
	Text,
	Toggle,
	TopNavigation,
	useStyleSheet,
} from "@ui-kitten/components"
import { ImageStyle, TouchableOpacity } from "react-native"

import { Div } from "react-native-magnus"
import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { SafeAreaLayout } from "../../@components/common/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { ScrollView } from "react-native-gesture-handler"
import { ThemeContext } from "../../@shared/context"
import { useNavigation } from "@react-navigation/native"

const MenuScreen = () => {
	const navigation: any = useNavigation()
	const styles = useStyleSheet(themedStyles)
	const themeContext = React.useContext(ThemeContext)

	const DATA = [
		{
			title: "My Pets",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {},
		},
		{
			title: "Appointments",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {},
		},
		{
			title: "Reminders",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {},
		},
		{
			title: "Tracking",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {
				navigation.navigate("")
			},
		},
		{
			title: "Meet Furry Friends",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {
				navigation.navigate("")
			},
		},
		{
			title: "Book Service",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {
				navigation.navigate("")
			},
		},

		{
			title: "Activity and Health Records",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {
				navigation.navigate("")
			},
		},
		{
			title: "Referral",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {
				navigation.navigate("")
			},
		},
		{
			title: "Lorem Ipsum",
			icon: (style: ImageStyle): IconElement => (
				<Icon {...style} name="person-outline" />
			),
			onPress: () => {
				navigation.navigate("Layouts")
			},
		},
	]
	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation
				accessoryLeft={
					<Text category="h6" style={{ fontWeight: "bold" }}>
						Menu
					</Text>
				}
			/>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate(Screens.PROFILE_SCREEN)}>
					<Div row alignItems="center" mt={20} mb={30} px={16}>
						<Avatar
							size="giant"
							source={{ uri: "https://i.ibb.co/bPwyC8J/image-profile-1.jpg" }}
						/>
						<Div ml={16}>
							<Text style={styles.profileName} category="h6">
								Mickey
							</Text>
							<Text category="s1">View your profile</Text>
						</Div>
					</Div>
				</TouchableOpacity>
				<Layout level="1">
					{DATA.map((item, i) => (
						<TouchableOpacity key={i}>
							<ListItem
								onPress={() => item.onPress()}
								style={{ paddingHorizontal: 16 }}
								title={`${item.title} `}
								accessoryLeft={item.icon}
								accessoryRight={(props) => (
									<FontAwesome name="angle-right" size={24} color="gray" />
								)}
							/>
						</TouchableOpacity>
					))}

					<Toggle
						style={styles.evaToggle}
						checked={themeContext.theme === "dark"}
						onChange={themeContext.toggleTheme}>
						Dark Mode
					</Toggle>
				</Layout>
			</ScrollView>
		</SafeAreaLayout>
	)
}
export default MenuScreen

const themedStyles = StyleService.create({
	bg: { backgroundColor: "background-basic-color-1" },
	container: {
		paddingTop: 20,
		flex: 1,
		backgroundColor: "background-basic-color-1",
	},

	profileContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	profileName: {
		fontWeight: "700",
	},
	listIcon: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	listTitle: {
		fontWeight: "600",
		fontSize: 16,
	},
	evaToggle: {
		margin: 8,
		alignSelf: "flex-end",
		flexDirection: "row-reverse",
	},
})
