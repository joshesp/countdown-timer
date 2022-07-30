import React from "react"
import "./FlipCounterBox.scss"

interface IFlipCounterBox {
	flip: boolean
	label: string
	count: number
}

const FlipCounterBox = ({ flip, label, count }: IFlipCounterBox) => {
	return (
		<div className="flip-wrapper">
			<ul className={`flip ${flip ? "play" : ""}`}>
				<li className="flip-clock-before">
					<a href="#">
						<div className="up">
							<div className="shadow"></div>
							<div className="counter">{count}</div>
						</div>
						<div className="down">
							<div className="shadow"></div>
							<div className="counter">{count}</div>
						</div>
					</a>
				</li>
				<li className="flip-clock-active">
					<a href="#">
						<div className="up">
							<div className="shadow"></div>
							<div className="counter">{count}</div>
						</div>
						<div className="down">
							<div className="shadow"></div>
							<div className="counter">{count}</div>
						</div>
					</a>
				</li>
			</ul>
			<span className="flip-clock-label">{label}</span>
		</div>
	)
}

export default FlipCounterBox
