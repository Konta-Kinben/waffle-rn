import { AuthService } from "./../../../@shared/services/auth.service"
import { storage } from "./../../../@shared/utils/util-function"
import { useMutation } from "react-query"

export const useAuth = () => {
	const loginFn = useMutation(AuthService.login, {
		onSuccess: (val) => {
			console.log("🚀 ~ file: useAuth.ts ~ line 8 ~ useAuth ~ val", val)
			// if (val?.data?.payload?.token) {
			// 	storage.setToken(val?.data?.payload?.token)
			// }
		},
	})
	const logoutFn = () => {
		storage.clearAll()
	}
	const loadUserFn = () => {}
	const isAuthenticated = storage.getToken() ? true : false
	return {
		loginFn,
		logoutFn,
		loadUserFn,
		isAuthenticated,
	}
}
