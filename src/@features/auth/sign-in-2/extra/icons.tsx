import { Icon, IconElement } from "@ui-kitten/components"

import { ImageStyle } from "react-native"
import React from "react"

export const PersonIcon = (style: ImageStyle): IconElement => (
	<Icon {...style} name="person" />
)
