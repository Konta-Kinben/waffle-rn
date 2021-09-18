import React from "react"
import { Screens } from "../../../@shared/enums/ScreenNames.enum"
import SignInScreen from "./SignInScreen"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()
export const AuthNavigators = () => {
	return (
		<Stack.Navigator headerMode="none" initialRouteName={Screens.SIGN_IN}>
			<Stack.Screen name={Screens.SIGN_IN} component={SignInScreen} />
		</Stack.Navigator>
	)
}
