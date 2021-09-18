import { Dimensions, Image } from "react-native"

import Carousel from "react-native-snap-carousel"
import { Div } from "react-native-magnus"
import React from "react"

const HomeScreenCarousel = () => {
	return (
		<Div maxH={200} flex={1} mt={25}>
			<Carousel
				layout={"stack"}
				data={homeCarousel}
				loop={true}
				autoplay={true}
				autoplayDelay={7000}
				autoplayInterval={5000}
				activeAnimationType="decay"
				renderItem={({ item, index }: any) => {
					return (
						<Image
							style={{ height: "100%", width: "100%" }}
							source={{ uri: item.image }}
						/>
					)
				}}
				sliderWidth={Dimensions.get("window").width}
				itemWidth={Dimensions.get("window").width}
			/>
		</Div>
	)
}

export default HomeScreenCarousel

export const homeCarousel: any[] = [
	{
		image:
			"https://images.unsplash.com/photo-1592951117908-4acda89ee817?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
		link: "/",
	},
	{
		image:
			"https://images.unsplash.com/photo-1544396738-140a4988bab8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=723&q=80",
		link: "/",
	},
	{
		image:
			"https://images.unsplash.com/photo-1601758176175-45914394491c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
		link: "/",
	},
]
