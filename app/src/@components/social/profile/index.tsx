import {
	Avatar,
	Button,
	List,
	StyleService,
	Text,
	useStyleSheet,
} from "@ui-kitten/components"
import {
	ImageBackground,
	ListRenderItemInfo,
	ScrollView,
	View,
} from "react-native"
import { MessageCircleIcon, PinIcon } from "./extra/icons"
import { Post, Profile } from "./extra/data"

import { EditIcon } from "../../../@shared/components/icons"
import FeedItem from "../feed/feed-item.component"
import { ImageOverlay } from "./extra/image-overlay.component"
import { ProfileSocial } from "./extra/profile-social.component"
import React from "react"
import { Screens } from "../../../@shared/enums/ScreenNames.enum"

/*
 * Will warn because container view is ScrollView that contains 3 List components inside.
 * Better workaround depends on the user needs.
 */
// LogBox.ignoreLogs([
// 	"VirtualizedLists should never be nested inside plain ScrollViews",
// ])

const profile: Profile = Profile.helenKuper()

const friends: Profile[] = [
	Profile.jenAustin(),
	Profile.jenniferGreen(),
	Profile.helenKuper(),
	Profile.jenAustin(),
	Profile.jenniferGreen(),
	Profile.helenKuper(),
]

const posts: Post[] = [
	Post.plant1(),
	Post.travel1(),
	Post.style1(),
	Post.style1(),
	Post.plant1(),
	Post.travel1(),
	Post.travel1(),
	Post.style1(),
	Post.plant1(),
]

export default ({ navigation }): React.ReactElement => {
	const styles = useStyleSheet(themedStyle)

	const onUpdatePress = (): void => {
		navigation && navigation.navigate(Screens.PROFILE_UPDATE_SCREEN)
	}

	const onMessageButtonPress = (): void => {
		navigation && navigation.navigate(Screens.CHAT_SCREEN)
	}

	const renderFriendItem = (
		info: ListRenderItemInfo<Profile>
	): React.ReactElement => (
		<View style={styles.friendItem}>
			<Avatar source={info.item.photo} />
			<Text style={styles.friendName} category="c2">
				{info.item.firstName}
			</Text>
		</View>
	)

	const renderPostItem = (
		info: ListRenderItemInfo<Post>
	): React.ReactElement => (
		<ImageBackground style={styles.postItem} source={info.item.photo} />
	)

	return (
		<ScrollView style={styles.container}>
			<ImageOverlay
				style={styles.header}
				source={require("./assets/image-background.jpg")}>
				<Avatar style={styles.profileAvatar} source={profile.photo} />
				<Text style={styles.profileName} category="h5" status="control">
					{profile.fullName}
				</Text>
				<View style={styles.locationContainer}>
					<PinIcon />
					<Text style={styles.location} status="control">
						{profile.location}
					</Text>
				</View>
				<View style={styles.profileButtonsContainer}>
					<Button
						style={styles.profileButton}
						accessoryLeft={EditIcon}
						onPress={onUpdatePress}>
						UPDATE
					</Button>
					<Button
						style={styles.profileButton}
						status="control"
						accessoryLeft={MessageCircleIcon}
						onPress={onMessageButtonPress}>
						MESSAGE
					</Button>
				</View>
				<View style={styles.socialsContainer}>
					<ProfileSocial
						style={styles.profileSocial}
						hint="Followers"
						value={`${profile.followers}`}
					/>
					<ProfileSocial
						style={styles.profileSocial}
						hint="Following"
						value={`${profile.following}`}
					/>
					<ProfileSocial
						style={styles.profileSocial}
						hint="Posts"
						value={`${profile.posts}`}
					/>
				</View>
			</ImageOverlay>
			<Text style={styles.sectionLabel} category="s1">
				About
			</Text>
			<Text style={styles.profileDescription} appearance="hint">
				{profile.description}
			</Text>
			<Text style={styles.sectionLabel} category="s1">
				Friends
			</Text>
			<List
				contentContainerStyle={styles.friendsList}
				horizontal={true}
				data={friends}
				renderItem={renderFriendItem}
			/>
			<Text style={styles.sectionLabel} category="s1">
				Shots
			</Text>

			<ScrollView>
				<FeedItem
					follow={false}
					name="Jon Doe"
					avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
				/>
				<FeedItem
					follow={false}
					name="Mickey"
					avatar="https://i.ibb.co/JzL7BPL/image-profile-3.jpg					"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1609791636587-50feca5caee7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
				/>
				<FeedItem
					follow={false}
					name="Emily"
					avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
				/>
				<FeedItem
					follow={false}
					name="Jon Doe"
					avatar="https://i.ibb.co/bPwyC8J/image-profile-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1592754862816-1a21a4ea2281?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				/>
				<FeedItem
					follow={false}
					name="Jon Doe"
					avatar="https://i.ibb.co/NVRDQ96/image-style-1.jpg"
					body={
						"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi delectus dolorem tenetur praesentium, voluptatibus blanditiis rerum, qui quibusdam facere culpa cupiditate quisquam consectetur. Corrupti perspiciatis accusamus voluptas cum repellendus quia!"
					}
					bodyImage="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
				/>
			</ScrollView>
			{/* <List data={posts} numColumns={3} renderItem={renderPostItem} /> */}
		</ScrollView>
	)
}

const themedStyle = StyleService.create({
	container: {
		flex: 1,
		backgroundColor: "background-basic-color-2",
	},
	header: {
		paddingVertical: 24,
		alignItems: "center",
	},
	profileAvatar: {
		width: 124,
		height: 124,
		borderRadius: 62,
		marginVertical: 16,
	},
	profileName: {
		zIndex: 1,
	},
	locationContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	location: {
		marginVertical: 8,
	},
	profileButtonsContainer: {
		flexDirection: "row",
		marginVertical: 32,
		marginHorizontal: 20,
	},
	profileButton: {
		flex: 1,
		marginHorizontal: 4,
	},
	socialsContainer: {
		flexDirection: "row",
		width: "75%",
		marginVertical: 8,
	},
	profileSocial: {
		flex: 1,
	},
	sectionLabel: {
		marginTop: 24,
		marginBottom: 8,
		marginHorizontal: 16,
	},
	profileDescription: {
		marginHorizontal: 16,
	},
	friendsList: {
		marginHorizontal: 8,
	},
	friendItem: {
		alignItems: "center",
		marginHorizontal: 8,
	},
	friendName: {
		marginTop: 8,
	},
	postItem: {
		flex: 1,
		aspectRatio: 1.0,
	},
})
