import * as Animatable from "react-native-animatable"

import {
	Alert,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import React, { useEffect } from "react"

import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { LinearGradient } from "expo-linear-gradient"
import { Screens } from "../../../@shared/enums/ScreenNames.enum"
import { useAuth } from "../hooks/useAuth"

const SignInScreen = ({ navigation }: any) => {
	const { loginFn } = useAuth()
	const [data, setData] = React.useState({
		phoneNumber: "",
		password: "",
		check_textInputChange: false,
		secureTextEntry: true,
		isValidUser: true,
		isValidPassword: true,
	})

	const textInputChange = (val: any) => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				phoneNumber: val,
				check_textInputChange: true,
				isValidUser: true,
			})
		} else {
			setData({
				...data,
				phoneNumber: val,
				check_textInputChange: false,
				isValidUser: false,
			})
		}
	}

	const handlePasswordChange = (val: any) => {
		if (val.trim().length >= 8) {
			setData({
				...data,
				password: val,
				isValidPassword: true,
			})
		} else {
			setData({
				...data,
				password: val,
				isValidPassword: false,
			})
		}
	}

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		})
	}

	const handleValidUser = (val: any) => {
		if (val.trim().length >= 4) {
			setData({
				...data,
				isValidUser: true,
			})
		} else {
			setData({
				...data,
				isValidUser: false,
			})
		}
	}

	const loginHandle = async (phoneNumber: any, password: any) => {
		if (data.phoneNumber.length == 0 || data.password.length == 0) {
			Alert.alert(
				"Wrong Input!",
				"phoneNumber or password field cannot be empty.",
				[{ text: "Okay" }]
			)
			return
		}
		await loginFn.mutateAsync({ phoneNumber, password })
	}

	useEffect(() => {
		fetching()
		return () => {}

		async function fetching() {
			await fetch(
				"https://mighty-mickey.poshapets.com/api/v1/appointments"
			).then(async (x) => {
				console.log(await x.json())
			})
		}
	}, [])
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#FF6347" barStyle="light-content" />
			<View style={styles.header}>
				<Text style={styles.text_header}>Welcome!</Text>
			</View>
			<Animatable.View
				animation="fadeInUpBig"
				style={[
					styles.footer,
					{
						backgroundColor: "#fff",
					},
				]}>
				<Text
					style={[
						styles.text_footer,
						{
							color: "#05375a",
						},
					]}>
					Phone Number
				</Text>
				<View style={styles.action}>
					<FontAwesome name="user-o" color={"#05375a"} size={20} />
					<TextInput
						keyboardType="number-pad"
						placeholder="Your Phone Number"
						placeholderTextColor="#666666"
						style={[
							styles.textInput,
							{
								color: "#05375a",
							},
						]}
						autoCapitalize="none"
						onChangeText={(val) => textInputChange(val)}
						onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
					/>
					{data.check_textInputChange ? (
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="green" size={20} />
						</Animatable.View>
					) : null}
				</View>
				{data.isValidUser ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>Invalid Phone Number</Text>
					</Animatable.View>
				)}

				<Text
					style={[
						styles.text_footer,
						{
							color: "#05375a",
							marginTop: 35,
						},
					]}>
					Password
				</Text>
				<View style={styles.action}>
					<Feather name="lock" color={"#05375a"} size={20} />
					<TextInput
						placeholder="Your Password"
						placeholderTextColor="#666666"
						secureTextEntry={data.secureTextEntry ? true : false}
						style={[
							styles.textInput,
							{
								color: "#05375a",
							},
						]}
						autoCapitalize="none"
						onChangeText={(val) => handlePasswordChange(val)}
					/>
					<TouchableOpacity onPress={updateSecureTextEntry}>
						{data.secureTextEntry ? (
							<Feather name="eye-off" color="grey" size={20} />
						) : (
							<Feather name="eye" color="grey" size={20} />
						)}
					</TouchableOpacity>
				</View>
				{data.isValidPassword ? null : (
					<Animatable.View animation="fadeInLeft" duration={500}>
						<Text style={styles.errorMsg}>
							Password must be 8 characters long.
						</Text>
					</Animatable.View>
				)}

				<TouchableOpacity>
					<Text style={{ color: "#FF6347", marginTop: 15 }}>
						Forgot password?
					</Text>
				</TouchableOpacity>
				<View style={styles.button}>
					<TouchableOpacity
						style={styles.signIn}
						onPress={() => {
							loginHandle(data.phoneNumber, data.password)
						}}>
						<LinearGradient
							colors={["#FFA07A", "#FF6347"]}
							style={styles.signIn}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#fff",
									},
								]}>
								Sign In
							</Text>
						</LinearGradient>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => navigation.navigate(Screens.SIGN_UP_DRAWER)}
						style={[
							styles.signIn,
							{
								borderColor: "#FF6347",
								borderWidth: 1,
								marginTop: 15,
							},
						]}>
						<Text
							style={[
								styles.textSign,
								{
									color: "#FF6347",
								},
							]}>
							Sign Up
						</Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	)
}

export default SignInScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FF6347",
	},
	header: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	footer: {
		flex: 3,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 30,
	},
	text_footer: {
		color: "#05375a",
		fontSize: 18,
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#f2f2f2",
		paddingBottom: 5,
	},
	actionError: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#FF0000",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -12,
		paddingLeft: 10,
		color: "#05375a",
	},
	errorMsg: {
		color: "#FF0000",
		fontSize: 14,
	},
	button: {
		alignItems: "center",
		marginTop: 50,
	},
	signIn: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
})
