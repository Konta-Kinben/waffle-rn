import CardStack, { Card } from "react-native-card-stack-swiper"
import React, { useRef } from "react"
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components"

import { ArrowIosBackIcon } from "../../@shared/components/icons"
import { SafeAreaLayout } from "../../@shared/components/safe-area-layout.component"
import { StyleSheet } from "react-native"
import SwipeProfile from "../../@components/social/swipe-profile"
import { View } from "react-native-animatable"

const SwipeProfileScreen = ({ navigation }): React.ReactElement => {
	const renderBackAction = (): React.ReactElement => (
		<TopNavigationAction icon={ArrowIosBackIcon} onPress={navigation.goBack} />
	)
	let swiperRef: any = useRef(null)
	return (
		<SafeAreaLayout style={styles.container} insets="top">
			<TopNavigation title="Friends" accessoryLeft={renderBackAction} />
			<View>
				<CardStack
					loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={(swiper) => {
						swiperRef = swiper
					}}>
					{profiles.map((x, i) => (
						<Card key={i}>
							<SwipeProfile
								refs={swiperRef}
								image={x.image}
								address={x.address}
								age={String(x.age)}
								height={String(x.height) + "CM"}
								weight={String(x.weight)}
								name={x.name}
							/>
						</Card>
					))}
				</CardStack>
			</View>
		</SafeAreaLayout>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default SwipeProfileScreen
const profiles = [
	{
		name: "Anusha Barwa",
		age: 27,
		image:
			"https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "Anusha Barwa",
		age: 27,
		image:
			"https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "Anusha Barwa",
		age: 27,
		image:
			"https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "Anusha Barwa",
		age: 27,
		image:
			"https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "Anusha Barwa",
		age: 27,
		image:
			"https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "Anusha Barwa",
		age: 27,
		image:
			"https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=498&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
	{
		name: "alan",
		age: 12,
		image:
			"https://images.unsplash.com/photo-1496982411516-bfb7eb1c74e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		address: "Rourkela, India",
		height: "150",
		weight: "23",
	},
]
