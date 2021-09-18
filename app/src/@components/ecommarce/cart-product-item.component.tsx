import { Button, Div, Icon, Image, Text } from "react-native-magnus"
import React, { useState } from "react"

import { StyleSheet } from "react-native"

interface IFProps {
	product: any
}
const CartProductItem: React.FC<IFProps> = ({ product }) => {
	const [qty, setQty] = useState(1)
	return (
		<Div row alignItems="flex-end" bg={"white"} p={15}>
			<Image source={{ uri: product.image }} h={100} w={100} mr={15} />
			<Div>
				<Text fontSize={16} fontWeight="bold" mb={2}>
					{product.title}
				</Text>
				<Text fontSize={14} color="#acacac" fontWeight="800">
					{product.description}
				</Text>

				<Div row mt={15}>
					<Button
						bg="white"
						shadow="sm"
						h={35}
						w={35}
						onPress={() => setQty(qty <= 1 ? 1 : qty - 1)}
						justifyContent="center"
						rounded="circle"
						alignItems="center">
						<Icon name="minus" color="#181a1b" fontFamily="Feather" />
					</Button>
					<Text w={40} textAlign="center" fontSize={18} fontWeight="bold">
						{qty}
					</Text>
					<Button
						bg="white"
						shadow="sm"
						h={35}
						w={35}
						onPress={() => setQty(qty + 1)}
						justifyContent="center"
						rounded="circle"
						alignItems="center">
						<Icon name="plus" color="#181a1b" fontFamily="Feather" />
					</Button>
				</Div>
			</Div>
			<Div alignItems="flex-end" justifyContent="flex-end" flex={1}>
				<Text fontSize={16} fontWeight="bold">
					${product.price}.00
				</Text>
			</Div>
		</Div>
	)
}

export default CartProductItem

const styles = StyleSheet.create({})
