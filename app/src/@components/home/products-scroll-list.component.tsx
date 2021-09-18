import { List, Text } from "@ui-kitten/components"
import { StyleSheet, View } from "react-native"

import { Div } from "react-native-magnus"
import Product from "./product.component"
import React from "react"

interface IFProps {
	title?: string
	subTitle?: string
	products?: any[]
	onPressViewAll?: () => void
	size?: "small" | "large"
	showRating?: boolean
}
const ProductsScrollList: React.FC<IFProps> = ({
	title,
	products,
	onPressViewAll,
	subTitle,
	size = "small",
	showRating = true,
}) => {
	return (
		<View style={{ padding: 10 }}>
			<Div row justifyContent="space-between" alignItems="center">
				<View>
					<Text style={styles.title} category="h6">
						{title}
					</Text>
					{subTitle ? (
						<Text category="s2" onPress={onPressViewAll}>
							{subTitle}
						</Text>
					) : (
						<></>
					)}
				</View>
				<Text category="s2" onPress={onPressViewAll}>
					View All
				</Text>
			</Div>
			<List
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				data={products}
				style={{ backgroundColor: "rgba(52, 52, 52, 0)" }}
				horizontal={true}
				renderItem={({ item, index }: any) => (
					<Product
						showRating={showRating}
						size={size}
						product={item}
						key={index}
					/>
				)}
			/>
		</View>
	)
}

export default ProductsScrollList

const styles = StyleSheet.create({
	title: {
		marginTop: 10,
		fontWeight: "bold",
	},
})
