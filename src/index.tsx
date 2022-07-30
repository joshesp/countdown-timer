import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.scss"

const container = document.getElementById("app")

if (container) {
	const root = createRoot(container)
	root.render(<App />)
} else {
	console.warn("Could't render because dom element doesn't exist.")
}
