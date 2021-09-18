import { AppNavigator } from "./@shared/navigations/app.navigator"
import { AppProvider } from "./@shared/context"
import React from "react"

const App = () => {
	return (
		<AppProvider>
			<AppNavigator />
		</AppProvider>
	)
}

export default App
