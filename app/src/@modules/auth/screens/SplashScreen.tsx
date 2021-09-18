import * as Animatable from "react-native-animatable"

import {
	Dimensions,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"

import { LinearGradient } from "expo-linear-gradient"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import React from "react"
import { Screens } from "../../../@shared/enums/ScreenNames.enum"

const SplashScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#FF6347" barStyle="light-content" />
			<View style={styles.header}>
				<Animatable.Image
					animation="bounceIn"
					//@ts-ignore
					duraton="1500"
					source={require("../../../@shared/assets/poshapets-logo.png")}
					style={styles.logo}
					resizeMode="stretch"
				/>
			</View>
			<Animatable.View
				style={[
					styles.footer,
					{
						backgroundColor: "#fff",
					},
				]}
				animation="fadeInUpBig">
				<Text
					style={[
						styles.title,
						{
							color: "#000",
						},
					]}>
					Find best food in your locality!
				</Text>
				<Text style={styles.text}>Sign in with account</Text>
				<View style={styles.button}>
					<TouchableOpacity
						onPress={() => navigation.navigate(Screens.SIGN_IN)}>
						<LinearGradient
							colors={["#FFA07A", "#FF6347"]}
							style={styles.signIn}>
							<Text style={styles.textSign}>Get Started</Text>
							<MaterialIcons name="navigate-next" color="#fff" size={20} />
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	)
}

export default SplashScreen

const { height } = Dimensions.get("screen")
const height_logo = height * 0.28

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FF6347",
	},
	header: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	footer: {
		flex: 1,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 30,
	},
	logo: {
		width: height_logo,
		height: height_logo,
	},
	title: {
		color: "#05375a",
		fontSize: 30,
		fontWeight: "bold",
	},
	text: {
		color: "grey",
		marginTop: 5,
	},
	button: {
		alignItems: "flex-end",
		marginTop: 30,
	},
	signIn: {
		width: 150,
		height: 40,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		flexDirection: "row",
	},
	textSign: {
		color: "white",
		fontWeight: "bold",
	},
})
