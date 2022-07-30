import React from "react"
import "./App.scss"

import Countdown from "./components/Countdown/Countdown"
import Footer from "./components/Footer/Footer"

const App = () => {
	return (
		<div className="full-container">
			<div className="title">We&apos;re launching soon</div>
			<Countdown />
			<Footer />
		</div>
	)
}

export default App
