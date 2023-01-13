/* eslint-disable react/prop-types */
import { useState } from "react"
import styled from "styled-components"
import DogAPI from "../../../../services/Apis/Dog/request"
import DogFactAPI from "../../../../services/Apis/DogFact/request"
import { Refresh } from "../../../buttons/refresh"
import { RainbowCard } from "../../../card/rainbow"

export function DogSection({ dogFact, dogImage }) {
	const [isLoading, setIsLoading] = useState("notLoading")
	const [dogText, setDogText] = useState("")
	const [dogSrc, setDogSrc] = useState("")

	async function RefreshInformations() {
		setIsLoading("Loading")
		const responseDogSrc = await DogAPI.get("api/breeds/image/random", {})
		setDogSrc(responseDogSrc.data.message)
		const responseFactDog = await DogFactAPI.get("api/v2/facts?limit=80", {})
		setDogText(responseFactDog.data.data[0].attributes.body)
		setIsLoading("notLoading")
	}

	return (
		<Container loading={isLoading}>
			<div className="text">
				<div className="content">
					{dogText == "" ? <p>{dogFact}</p> : <p>{dogText}</p>}
				</div>
			</div>

			<div className="image">
				<RainbowCard />
				{dogSrc == "" ? (
					<img src={dogImage} alt="Dog" className="Dog" />
				) : (
					<img src={dogSrc} alt="Dog" className="Dog" />
				)}
			</div>

			<div className="button">
				<Refresh
					doItOnClcik={() => {
						RefreshInformations()
					}}
				/>
			</div>
		</Container>
	)
}

const Container = styled.section<any>`
	max-width: 100vw;
	max-height: 100vh;
	height: 100vh;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	div.text,
	div.image {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		width: 40vw;
		height: 40vh;
	}

	div.button {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		width: 20vw;
	}

	div.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		div.content {
			width: 30vw;
			display: flex;
			justify-content: center;
			align-items: center;

			p {
				margin: 0px;

				font-size: 2.5vw;
				font-weight: 700;
			}
		}
	}

	div.image {
		display: flex;
		justify-content: center;
		align-items: center;

		div {
			position: absolute;
			width: 32vw;
			height: 32vw;
		}
		img {
			filter: ${(props) =>
				props.loading == "Loading" ? "blur(1.5rem)" : "none"};
			z-index: 2;
			position: absolute;
			width: 30vw;
			height: 30vw;
			border-radius: 21px;
		}
	}
`
