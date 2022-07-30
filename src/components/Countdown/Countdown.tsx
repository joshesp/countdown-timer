import React, { useEffect, useState } from "react"
import FlipCounterBox from "../FlipCounterBox/FlipCounterBox"
import "./Countdown.scss"

const Countdown = () => {
	const [flip, setFlip] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setFlip(!flip)
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [flip])

	return (
		<div className="countdown">
			<div className="flip-clock-wrapper">
				<FlipCounterBox flip={flip} count={14} label="Days" />
				<FlipCounterBox flip={flip} count={24} label="Hours" />
				<FlipCounterBox flip={flip} count={59} label="Minutes" />
				<FlipCounterBox flip={flip} count={59} label="Seconds" />
			</div>
		</div>
	)
}

export default Countdown
