import { Dimensions, Image, TouchableOpacity, View } from "react-native"
import { StyleService, Text, useStyleSheet } from "@ui-kitten/components"

import { Icon } from "react-native-magnus"
import { ProductIF } from "../../@shared/assets"
import React from "react"
import { Screens } from "../../@shared/enums/ScreenNames.enum"
import { useNavigation } from "@react-navigation/native"

const wWidth = Dimensions.get("window").width
interface IFProps {
	product: ProductIF
	size?: "small" | "large"
	showRating?: boolean
}
const Product: React.FC<IFProps> = ({ product, size, showRating }) => {
	const navigation = useNavigation()
	const sm = size === "small"
	const themedStyles = StyleService.create({
		container: {
			width: wWidth / (sm ? 3 : 2) - 8,
			padding: sm ? 7 : 15,
			backgroundColor: "background-basic-color-1",
		},
		catImage: {
			height: sm ? 120 : 170,
			width: sm ? 120 : 170,
			borderRadius: 15,
			marginBottom: sm ? 10 : 15,
		},
		meta: {
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "row",
			marginTop: 10,
		},
		price: {
			fontSize: sm ? 14 : 18,
			fontWeight: "bold",
		},
		rating: {
			backgroundColor: "#f17c2d",
			borderRadius: 20,
			height: 20,
			width: 45,
			alignItems: "center",
			justifyContent: "center",
		},
		ratingText: {
			fontSize: 14,
			color: "white",
		},
	})

	const styles = useStyleSheet(themedStyles)
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(Screens.PRODUCT_DETAILS_DRAWER)}>
			<View style={styles.container}>
				<Image style={styles.catImage} source={{ uri: product.image }} />
				<Text category="s2" style={{ fontWeight: "700" }}>
					{product.title}
				</Text>
				{/* <Text category="s2">{product.description}</Text> */}
				<View style={styles.meta}>
					<Text style={styles.price}>${product.price}.00</Text>

					{showRating ? (
						<View style={styles.rating}>
							<Text style={styles.ratingText}>
								{product.rating}{" "}
								<Icon
									name="star"
									color="white"
									fontSize={10}
									fontFamily="AntDesign"
								/>
							</Text>
						</View>
					) : (
						<></>
					)}
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default Product
