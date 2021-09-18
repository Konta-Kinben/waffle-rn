import { CoreAxiosInstance } from "../config"
import { IAuthCredential } from "../interfaces"

const END_POINT: string = "/auth/login/customer"

export const AuthService = {
	login: (payload: IAuthCredential) => {
		return CoreAxiosInstance.post(`${END_POINT}`, payload)
	},
}
// class AAuthService extends BaseService<{},{}> {
// 	END_POINT: string = "/auth"
// 	constructor() {
// 		super(this.END_POINT)
// 	}

// 	login(payload: IAuthCredential) {
// 		console.log(this.END_POINT) // undefined
// 		return CoreAxiosInstance.post(`${END_POINT}`, payload)
// 	}
// }

// export const _AAuthService = new AAuthService()
