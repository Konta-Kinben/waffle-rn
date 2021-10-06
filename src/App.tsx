import { AppNavigator } from "./@application/navigations"
import { AppProvider } from "./@application/context"
import React from "react"

const App = () => {
	return (
		<AppProvider>
			<AppNavigator />
		</AppProvider>
	)
}

export default App
