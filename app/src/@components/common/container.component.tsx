import { StyleProp, ViewStyle } from "react-native"

import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"

interface IFProps {
	children: any
	py?: number
	style?: StyleProp<ViewStyle>
}
const Container: React.FC<IFProps> = ({ py = 10, style, children }) => {
	return (
		<SafeAreaView
			style={[{ paddingLeft: py, flex: 1, paddingRight: py }, style]}>
			{children}
		</SafeAreaView>
	)
}

export default Container
