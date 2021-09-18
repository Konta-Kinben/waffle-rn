export interface ProductIF {
	id: string | number
	image: any
	title: string
	description: string
	price: number | string
	rating: number | string
}
export const productsData: ProductIF[] = [
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
		title: "Fresh Red Onions",
		description: "Pajeroma",
		price: 30,
		rating: 4.2,
	},
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1552585960-0e1069ce7405?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
		title: "Fresh Red Onions",
		description: "Pajeroma",
		price: 30,
		rating: 4.2,
	},
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1531054871758-3cfa9fd8a3a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=353&q=80",
		title: "Fresh Red Onions",
		description: "Pajeroma",
		price: 30,
		rating: 4.2,
	},
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1600615789274-a87bc22a02fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		title: "Fresh Red Onions",
		description: "Pajeroma",
		price: 30,
		rating: 4.2,
	},
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1503631285924-e1544dce8b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
		title: "Fresh Red Onions",
		description: "Pajeroma",
		price: 30,
		rating: 4.2,
	},
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1584909052635-764d33948193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80",
		title: "Fresh Red Onions",
		description: "Pajeroma",
		price: 30,
		rating: 4.2,
	},
]

export const IMAGES = {
	logo: require("./images/poshapets-icon.png"),
}
