import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { GamerButton } from "../../../buttons/gamer_button"

export const ChatGPT = () => {
	const [display, setDisplay] = useState("pre-search")

	const [loading, setLoading] = useState(false)

	const [question, setQuestion] = useState("")
	const [text, setText] = useState("")

	async function getInformation(question) {
		//const url = "https://crud-antonio-neto.vercel.app/"
		const url = "http://localhost:3000/"
		if (question.length != 0) {
			setLoading(true)

			axios
				.get(url + "api/chatgpt" + "?question=" + question)
				.then((response) => {
					setText(response.data.result)
					setDisplay("pos-search")
					setLoading(false)
				})
				.catch((error) => {
					console.log(error)
				})
		} else {
			alert("Please, fill the input before.")
		}
	}

	return (
		<Container display={display}>
			<div className="Input">
				<div className="input-group">
					<input
						className="input"
						autoComplete="off"
						name="question"
						type="text"
						required
						onChange={(event) => {
							setQuestion(event.target.value)
						}}
					/>
					<label className="user-label">Make a question</label>
				</div>
				<GamerButton
					onPressed={() => {
						getInformation(question)
					}}
				>
					{loading ? (
						<img src="/loadingPacMan.svg" alt="loading" />
					) : (
						<p>Search</p>
					)}
				</GamerButton>
			</div>
			<div className="Output">
				<p>{text}</p>
				<div>
					<img src="/images/alert_smile.png" alt="information" />
					<p>
						Data may not be 100% correct, take it easy. Learn more about{" "}
						<a
							href="https://openai.com/blog/chatgpt/"
							target="_blank"
							rel="noreferrer"
						>
							ChatGPT
						</a>
					</p>
				</div>
				<button
					onClick={() => {
						setDisplay("pre-search")
					}}
				>
					<img src="/images/back-arrow.png" alt="back" />
				</button>
			</div>
		</Container>
	)
}

const Container = styled.section<any>`
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.Input {
		display: ${(props) => (props.display == "pre-search" ? "flex" : "none")};
		animation: slide-in-elliptic-top-fwd 0.7s
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		flex-direction: column;
		gap: 4vw;

		div.button_rgb {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.input-group {
			position: relative;
			width: 50vw;
		}

		.input {
			border: 3px solid #000;
			background: none;
			padding: 1rem;
			font-size: 1rem;
			color: black;
			width: 50vw;
		}

		.user-label {
			left: 15px;
			color: #000;
			pointer-events: none;
			transform: translateY(1rem);
			transition: 350ms;
			font-family: "MADE-Soulmaze";
			width: 50vw;
		}

		.input:focus,
		input:valid {
			outline: none;
			--angle: 0deg;
			border-bottom: 3px solid;
			border-image: conic-gradient(
					from var(--angle),
					red,
					yellow,
					lime,
					aqua,
					blue,
					magenta,
					red
				)
				1;
			animation: 3s rotate9234 linear infinite;
		}

		@keyframes rotate9234 {
			to {
				--angle: 360deg;
			}
		}

		@property --angle {
			syntax: "<angle>";
			initial-value: 0deg;
			inherits: false;
		}

		.input:focus ~ label,
		input:valid ~ label {
			transform: translateY(235%) scale(1);
			background-color: white;
			padding: 0 0.2em;
			color: #2196f3;
		}
	}

	.Output {
		animation: slide-in-elliptic-top-fwd 0.7s
			cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

		width: 80%;
		display: ${(props) => (props.display == "pos-search" ? "flex" : "none")};
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1vw;

		p {
			font-size: 1.5vw;
			font-weight: 500;
		}

		button {
			width: 10vw;
			border-radius: 10vw;
			background-color: white;
			border: none;

			:hover {
				cursor: pointer;
			}

			img {
				width: 50%;
			}
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1vw;
			img {
				width: 3%;
			}
			p {
				font-size: 1vw;
			}
		}

		@keyframes slide-in-elliptic-top-fwd {
			0% {
				-webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
				transform: translateY(-600px) rotateX(-30deg) scale(0);
				-webkit-transform-origin: 50% 100%;
				transform-origin: 50% 100%;
				opacity: 0;
			}
			100% {
				-webkit-transform: translateY(0) rotateX(0) scale(1);
				transform: translateY(0) rotateX(0) scale(1);
				-webkit-transform-origin: 50% 1400px;
				transform-origin: 50% 1400px;
				opacity: 1;
			}
		}
	}
`
