import * as ExpoComponent from "./app-loading.componen"
import * as RNComponent from "./app-loading.component.rn"

import Constants from "expo-constants"

export type TaskResult<T = any> = [string, T]
export type Task = () => Promise<TaskResult | null>

const Component = Constants.platform ? ExpoComponent : RNComponent

export const AppLoading = Component.AppLoading
export const LoadFontsTask = Component.LoadFontsTask
