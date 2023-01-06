/* eslint-disable react/prop-types */
import { useState } from "react"
import styled from "styled-components"
import CatAPI from "../../../../services/Apis/Cat/request"
import CatFactAPI from "../../../../services/Apis/CatFact/request"
import { Refresh } from "../../../buttons/refresh"
import { RainbowCard } from "../../../card/rainbow"

export function CatSection({ catFact, catImage }) {
	const [isLoading, setIsLoading] = useState(false)
	const [catText, setCatText] = useState("")
	const [catSrc, setCatSrc] = useState("")

	async function RefreshInformations() {
		setIsLoading(true)
		const responseCatImage = await CatAPI.get("v1/images/search", {})
		const responseFactCat = await CatFactAPI.get("fact", {})
		setCatSrc(responseCatImage.data[0].url)
		setCatText(responseFactCat.data.fact)
		setIsLoading(false)
	}

	return (
		<Container>
			<div className="text">
				{catText == "" ? <p>{catFact}</p> : <p>{catText}</p>}
			</div>

			<div className="image">
				<RainbowCard />
				{catSrc == "" ? (
					<img src={catImage} alt="Cat" className="Cat" />
				) : (
					<img src={catSrc} alt="Cat" className="Cat" />
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

const Container = styled.section`
	height: 100vh;

	display: flex;
	flex-direction: row;
	justify-content: center;

	div.text,
	div.image {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		width: 40vw;
	}

	div.button {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		width: 20vw;
	}

	p {
		width: 30vw;
		margin: 0px;

		font-size: 2.5vw;
		font-weight: 700;
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
			z-index: 2;
			position: absolute;
			width: 30vw;
			height: 30vw;
			border-radius: 21px;
		}
	}
`
