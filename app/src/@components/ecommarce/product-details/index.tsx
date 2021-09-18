import {
	Button,
	Input,
	Layout,
	Radio,
	StyleService,
	Text,
	useStyleSheet,
} from "@ui-kitten/components"
import { ImageBackground, Platform, View } from "react-native"
import { Product, ProductColor } from "./extra/data"

import { CommentList } from "./extra/comment-list.component"
import { KeyboardAvoidingView } from "./extra/keyboard-avoiding-view.component"
import React from "react"
import { Screens } from "../../../@shared/enums/ScreenNames.enum"

const product: Product = Product.pinkChair()

const keyboardOffset = (height: number): number =>
	Platform.select({
		android: 0,
		ios: height,
	})

export default ({ navigation }): React.ReactElement => {
	const [comment, setComment] = React.useState<string>()
	const [selectedColorIndex, setSelectedColorIndex] = React.useState<number>()
	const styles = useStyleSheet(themedStyles)

	const onBuyButtonPress = (): void => {
		navigation && navigation.navigate(Screens.CART_DRAWER)
	}

	const onAddButtonPress = (): void => {
		navigation && navigation.navigate(Screens.CART_DRAWER)
	}

	const renderColorItem = (
		color: ProductColor,
		index: number
	): React.ReactElement => (
		<Radio key={index} style={styles.colorRadio}>
			{(evaProps) => (
				<Text {...evaProps} style={{ color: color.value, marginLeft: 10 }}>
					{color.description.toUpperCase()}
				</Text>
			)}
		</Radio>
	)

	const renderHeader = (): React.ReactElement => (
		<Layout style={styles.header}>
			<ImageBackground
				style={styles.image}
				source={{
					uri: `https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80`,
				}}
			/>
			<Layout style={styles.detailsContainer} level="1">
				<Text category="h6">Authority Flaked Entree</Text>
				<Text style={styles.subtitle} appearance="hint" category="p2">
					Gravy Adult Wet Cat Food
				</Text>
				<Text style={styles.price} category="h4">
					$1.05
				</Text>
				<Text style={styles.description} appearance="hint">
					Provide your kitty with the kind of nutritional support and great
					taste she deserves at mealtime with Authority Turkey Adult Cat Food.
					This delicious food features the great taste of turkey in each and
					every bite, and is made using natural ingredients you can feel good
					about serving to your cat.
				</Text>
				{/* <Text style={styles.sectionLabel} category="h6">
					Size:
				</Text>
				<Text style={styles.size} appearance="hint">
					{product.size}
				</Text> */}
				{/* <Text style={styles.sectionLabel} category="h6">
					Color:
				</Text>
				<RadioGroup
					style={styles.colorGroup}
					selectedIndex={selectedColorIndex}
					onChange={setSelectedColorIndex}>
					{product.colors.map(renderColorItem)}
				</RadioGroup> */}
				<View style={styles.actionContainer}>
					<Button
						style={styles.actionButton}
						size="giant"
						status="primary"
						onPress={onBuyButtonPress}>
						BUY
					</Button>
					<Button
						style={styles.actionButton}
						size="giant"
						status="control"
						onPress={onAddButtonPress}>
						ADD TO BAG
					</Button>
				</View>
			</Layout>
			<Input
				style={styles.commentInput}
				label={(evaProps) => (
					<Text {...evaProps} style={styles.commentInputLabel}>
						Comments
					</Text>
				)}
				placeholder="Write your comment"
				value={comment}
				onChangeText={setComment}
			/>
		</Layout>
	)

	return (
		<KeyboardAvoidingView style={styles.container} offset={keyboardOffset}>
			<CommentList
				style={styles.commentList}
				data={product.comments}
				ListHeaderComponent={renderHeader()}
			/>
		</KeyboardAvoidingView>
	)
}

const themedStyles = StyleService.create({
	container: {
		flex: 1,
		backgroundColor: "background-basic-color-2",
	},
	commentList: {
		flex: 1,
		backgroundColor: "transparent",
	},
	header: {
		marginBottom: 8,
	},
	image: {
		height: 340,
		width: "100%",
	},
	detailsContainer: {
		paddingVertical: 24,
		paddingHorizontal: 16,
	},
	subtitle: {
		marginTop: 4,
	},
	price: {
		position: "absolute",
		top: 24,
		right: 16,
	},
	description: {
		marginVertical: 16,
	},
	size: {
		marginBottom: 16,
	},
	colorGroup: {
		flexDirection: "row",
		marginHorizontal: -8,
	},
	colorRadio: {
		marginHorizontal: 8,
	},
	actionContainer: {
		flexDirection: "row",
		marginHorizontal: -8,
		marginTop: 24,
	},
	actionButton: {
		flex: 1,
		marginHorizontal: 8,
	},
	sectionLabel: {
		marginVertical: 8,
	},
	commentInputLabel: {
		fontSize: 16,
		marginBottom: 8,
		color: "text-basic-color",
	},
	commentInput: {
		marginHorizontal: 16,
		marginVertical: 24,
	},
})
