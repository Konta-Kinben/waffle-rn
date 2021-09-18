import AsyncStorage from "@react-native-async-storage/async-storage"
import { ENV } from "./../../ENV"
//base filter query utils
export const concatFilterQuery = (options: any): string => {
	let result: string[] = []
	if (options.searchTerm) {
		result.push(`searchTerm=${options.searchTerm}`)
	}
	if (options.page) {
		result.push(`page=${options.page}`)
	}
	if (options.take) {
		result.push(`take=${options.take}`)
	}
	if (options.between) {
		result.push(`between=${options.between}`)
	}
	if (options.before) {
		result.push(`before=${options.before}`)
	}
	if (options.between) {
		result.push(`between=${options.between}`)
	}
	if (options.after) {
		result.push(`after=${options.after}`)
	}
	if (options.fetchAll) {
		result.push(`fetchAll=${options.fetchAll}`)
	}
	if (options.single) {
		result.push(`single=${options.single}`)
	}
	if (options.relations) {
		result.push(`relations=${JSON.stringify(options.relations)}`)
	}
	if (options.selects) {
		result.push(`selects=${options.selects}`)
	}
	return result.join("&")
}

//? Session Storage
export const storage = {
	async setToken(token: string) {
		try {
			await AsyncStorage.setItem(`${ENV.SESSION_PREFIX}token`, token)
		} catch (e) {
			return e
		}
	},
	async getToken() {
		try {
			const value = await AsyncStorage.getItem(`${ENV.SESSION_PREFIX}token`)
			if (value !== null) {
				return false
			}
			return value
		} catch (e) {
			return e
		}
	},
	async setData(data: any, key: string) {
		try {
			await AsyncStorage.setItem(
				`${ENV.SESSION_PREFIX}${key}`,
				JSON.stringify(data)
			)
		} catch (e) {
			return e
		}
	},

	async getDate(key: string) {
		try {
			const value = await AsyncStorage.getItem(`${ENV.SESSION_PREFIX}${key}`)
			if (value !== null) {
				return false
			} else if (typeof value === "string") {
				return value
			}
			return JSON.parse(value)
		} catch (e) {
			return e
		}
	},

	async removeData(key: string) {
		try {
			await AsyncStorage.removeItem(`${ENV.SESSION_PREFIX}${key}`)
		} catch (e) {
			return e
		}
	},
	async clearAll() {
		try {
			await AsyncStorage.clear()
		} catch (e) {
			return e
		}
	},
}
