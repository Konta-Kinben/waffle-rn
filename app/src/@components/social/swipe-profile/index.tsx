import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native"
import { Div, Text as MText } from "react-native-magnus"
import {
	FontAwesome,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons"

import { ColorsEnum } from "../../../@shared/enums/Theme.enum"
import { ImageOverlay } from "./extra/image-overlay.component"
import { Profile } from "./extra/data"
import React from "react"
import { Text } from "@ui-kitten/components"

const profile: Profile = Profile.jenAustin()

interface IFProps {
	image: string
	address: string
	height: string
	age: string
	weight: string
	refs: any
	name: string
}

const SwipeProfile: React.FC<IFProps> = ({
	address,
	age,
	height,
	image,
	weight,
	name,
	refs,
}): React.ReactElement => {
	const [rating, setRating] = React.useState<number>(profile.experience)

	return (
		<ImageOverlay style={styles.container} source={{ uri: image }}>
			<View style={styles.profileDetailsContainer}>
				<Div row alignItems="center" mb={5}>
					<MText fontSize={24} mr={10} color="#fff" fontWeight="700">
						{name}
					</MText>
					<MaterialIcons name="verified" size={24} color="#279cea" />
				</Div>
				<Div row alignItems="center">
					<FontAwesome name="circle" size={14} color="#4caf50" />
					<MText ml={10} letterSpacing={1} style={{ color: "white" }}>
						Recently Active
					</MText>
				</Div>

				<Text
					category="h6"
					style={{
						color: "#fff",
						fontWeight: "400",
						opacity: 0.8,
						marginTop: 15,
						fontSize: 16,
					}}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat fuga
					harum cumque exercitationem minima recusandae ratione?
				</Text>
				<Div row justifyContent="center" my={15}>
					<Div
						w={Dimensions.get("window").width - 150}
						row
						justifyContent="space-between">
						<TouchableOpacity
							onPress={() => {
								refs?.swipeLeft()
							}}>
							<Div
								rounded={40}
								h={40}
								borderWidth={2}
								borderColor={ColorsEnum.Primary}
								row
								w={40}
								justifyContent="center"
								alignItems="center">
								<MaterialCommunityIcons
									name="reload"
									size={24}
									color={ColorsEnum.Primary}
								/>
							</Div>
						</TouchableOpacity>
						<Div
							rounded={40}
							h={40}
							borderWidth={2}
							borderColor={"#fa4b6a"}
							row
							w={40}
							justifyContent="center"
							alignItems="center">
							<MaterialCommunityIcons
								name="close-thick"
								size={24}
								color="#fa4b6a"
							/>
						</Div>
						<Div
							rounded={40}
							h={40}
							borderWidth={2}
							borderColor="#31c3fe"
							row
							w={40}
							justifyContent="center"
							alignItems="center">
							<FontAwesome name="star" size={24} color="#31c3fe" />
						</Div>
						<Div
							rounded={40}
							h={40}
							borderWidth={2}
							borderColor={"#5ce9cf"}
							row
							w={40}
							justifyContent="center"
							alignItems="center">
							<FontAwesome name="heart" size={24} color="#5ce9cf" />
						</Div>
						{/* <TouchableOpacity
					>
					<Text style={{ backgroundColor: "red", color: "black" }}>Left</Text>
				</TouchableOpacity> */}
					</Div>
				</Div>
			</View>
		</ImageOverlay>
	)
}

export default SwipeProfile

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: Dimensions.get("window").height - 60,
		width: Dimensions.get("window").width,
	},
	profileDetailsContainer: {
		position: "absolute",
		paddingHorizontal: 24,
		paddingBottom: 32,
		left: 0,
		right: 0,
		bottom: 0,
	},
	profileName: {
		marginVertical: 16,
		fontWeight: "bold",
		marginRight: 10,
	},
	profileLocation: {
		marginVertical: 8,
	},
	profileParametersContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 64,
	},
})
