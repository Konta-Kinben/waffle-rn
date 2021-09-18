import { Avatar, Input, List } from "@ui-kitten/components"
import { Feather, Ionicons } from "@expo/vector-icons"

import { ColorsEnum } from "../../@shared/enums/Theme.enum"
import { Div } from "react-native-magnus"
import FeedItem from "../../@components/social/feed/feed-item.component"
import React from "react"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { ScrollView } from "react-native-gesture-handler"
import { StyleSheet } from "react-native"

const stories = [
	{
		image:
			"https://images.unsplash.com/photo-1555169062-013468b47731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Dose",
	},
	{
		image:
			"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBldHMlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Dose",
	},
	{
		image:
			"https://images.unsplash.com/photo-1605044085790-1f48630b58e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBldHMlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBldHMlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Dose",
	},
	{
		image:
			"https://images.unsplash.com/photo-1605044085790-1f48630b58e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBldHMlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
	{
		image:
			"https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
		title: "Jon Doe",
	},
]

const FeedScreen = ({ navigation }): React.ReactElement => {
	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<Div px={16} py={10} row alignItems="center">
				<Feather
					onPress={() => navigation.navigate(Screens.SWIPE_SCREEN)}
					name="users"
					size={24}
					color={ColorsEnum.Primary}
				/>
				<Input
					size="medium"
					style={{
						borderRadius: 5,
						borderWidth: 0,
						flex: 1,
						marginHorizontal: 16,
					}}
					placeholder="Search..."
				/>
				<Ionicons
					onPress={() => navigation.navigate(Screens.CONVERSATION_LIST_SCREEN)}
					name="chatbox-outline"
					size={24}
					color={ColorsEnum.Primary}
				/>
			</Div>

			<ScrollView>
				<Div px={6} py={10} row>
					<List
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
						data={stories}
						style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
						horizontal={true}
						renderItem={({ item, index }: any) => (
							<Div mx={10}>
								<Avatar
									style={{ borderWidth: 2, borderColor: ColorsEnum.Primary }}
									size="large"
									source={{ uri: item.image }}
								/>
								{/* <Text category="label">{item.title}</Text> */}
							</Div>
						)}
					/>
				</Div>
				<FeedItem
					name="Jon Doe"
					avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
				/>
				<FeedItem
					name="Mickey"
					avatar="https://i.ibb.co/JzL7BPL/image-profile-3.jpg					"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1609791636587-50feca5caee7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				/>
				<FeedItem
					name="Emily"
					avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
				/>
				<FeedItem
					name="Jon Doe"
					avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				/>
				<FeedItem
					name="Jon Doe"
					avatar="https://i.ibb.co/NVRDQ96/image-style-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
				/>
			</ScrollView>
		</SafeAreaLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default FeedScreen
