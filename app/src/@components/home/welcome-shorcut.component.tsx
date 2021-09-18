import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components"

import { ColorsEnum } from "../../@shared/enums/Theme.enum"
import { Div } from "react-native-magnus"
import React from "react"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

const WelcomeShortcut = () => {
	const styles = useStyleSheet(themedStyles)

	const navigation = useNavigation()

	return (
		<Div
			p="lg"
			rounded={10}
			mt={-35}
			style={styles.container}
			shadow="md"
			mr={10}
			ml={10}>
			<Div row justifyContent="space-between" alignItems="flex-start">
				<Div>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						Good Evening,
					</Text>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						Econw
					</Text>
				</Div>
				<Div>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						Credits
					</Text>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						BDT 10.00
					</Text>
				</Div>
			</Div>
			<Div row alignItems="flex-end">
				<Div flex={1} w="25%" pt={15} pb={15}>
					<TouchableOpacity
						onPress={() => navigation.navigate(Screens.PET_LISTING_SCREEN)}>
						<Div alignItems="center">
							<MaterialIcons name="pets" size={34} color={ColorsEnum.Primary} />
							<Text category="s2" style={{ fontWeight: "bold" }}>
								My Pets
							</Text>
						</Div>
					</TouchableOpacity>
				</Div>
				<Div flex={1} w="25%" alignItems="center" pt={15} pb={15}>
					<MaterialCommunityIcons
						name="location-enter"
						size={34}
						color={ColorsEnum.Primary}
					/>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						Activity
					</Text>
				</Div>
				<Div flex={1} w="25%" alignItems="center" pt={15} pb={15}>
					<MaterialCommunityIcons
						name="brightness-percent"
						size={34}
						color={ColorsEnum.Primary}
					/>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						Promo
					</Text>
				</Div>
				<Div flex={1} w="25%" alignItems="center" pt={15} pb={15}>
					<MaterialCommunityIcons
						name="history"
						size={34}
						color={ColorsEnum.Primary}
					/>
					<Text category="s2" style={{ fontWeight: "bold" }}>
						History
					</Text>
				</Div>
			</Div>
		</Div>
	)
}

export default WelcomeShortcut

const themedStyles = StyleService.create({
	container: {
		backgroundColor: "background-basic-color-1",
	},
})
