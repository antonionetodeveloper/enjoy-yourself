import { useState } from "react"
import styled from "styled-components"
import AgifyAPI from "../../../../services/Apis/AgiFy/request"
import GenderizeAPI from "../../../../services/Apis/Genderize/request"
import { Check } from "../../../buttons/check"
import { TechCard } from "../../../card/tech"

export const FunFactsAboutYou = () => {
	const [wasRequired, setWasRequired] = useState(false)
	const [searchName, setSearchName] = useState("")
	const [name, setName] = useState("")
	const [count, setCount] = useState(0)
	const [age, setAge] = useState(0)
	const [gender, setGender] = useState("")
	const [probabity, setProbabity] = useState(0.0)

	async function getData(name: string) {
		const responseGenderize = await GenderizeAPI.get("?name=" + name, {})
		const responseAgify = await AgifyAPI.get("?name=" + name, {})
		setName(searchName)
		setAge(responseAgify.data.age)
		setCount(responseAgify.data.count)
		setGender(responseGenderize.data.gender)
		setProbabity(responseGenderize.data.probability * 100)
		setWasRequired(true)
	}

	const keyPressed = (event) => {
		if (event.key == "Enter") {
			event.preventDefault()
			getData(searchName)
		}
	}

	return (
		<Container onKeyDown={keyPressed}>
			<div className="getData">
				<FunInput
					onChange={(event) => {
						setSearchName(event.target.value)
					}}
					type="text"
					className="input"
					placeholder="Type your first name"
				/>
				<Check
					text={"check"}
					doItOnClcik={() => {
						getData(searchName)
					}}
				/>
			</div>
			<div className="outputData">
				{wasRequired ? (
					<div>
						{count == 0 ? (
							<p>I guess that name does not exist.</p>
						) : (
							<div>
								<TechCard>
									<div>
										<p>Name: {name}.</p>
										<p>It was researched {count} times.</p>
										<p>I guess you have about {age} years old.</p>
										<p>
											You are {gender} within {probabity}% sure.
										</p>
									</div>
								</TechCard>
							</div>
						)}
					</div>
				) : (
					<></>
				)}
			</div>
		</Container>
	)
}

const Container = styled.section`
	height: 100vh;
	display: flex;

	.getData {
		width: 50vw;
		height: 100vh;
		margin: 0px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3vw;
	}

	.outputData {
		width: 50vw;
		height: 100vh;
		margin: 0px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		p {
			font-size: 1.8vw;
			font-weight: 700;
		}

		div {
			animation: slide-in-blurred-top 1s cubic-bezier(0.23, 1, 0.32, 1) both;
			div {
				display: flex;
				flex-direction: column;
				gap: 4vw;
				z-index: 2;
				p {
					z-index: 2;
					color: white;
					font-size: 2vw;
					font-weight: 700;
				}
			}

			@keyframes slide-in-blurred-top {
				0% {
					-webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
					transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
					-webkit-transform-origin: 50% 0%;
					transform-origin: 50% 0%;
					-webkit-filter: blur(40px);
					filter: blur(40px);
					opacity: 0;
				}
				100% {
					-webkit-transform: translateY(0) scaleY(1) scaleX(1);
					transform: translateY(0) scaleY(1) scaleX(1);
					-webkit-transform-origin: 50% 50%;
					transform-origin: 50% 50%;
					-webkit-filter: blur(0);
					filter: blur(0);
					opacity: 1;
				}
			}
		}
	}
`
const FunInput = styled.input`
	width: 20vw;

	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI";
	font-weight: 500;
	font-size: 1.5vw;
	box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
	border-radius: 0.4vw;
	border: none;
	outline: none;
	padding: 0.4vw;
	transition: 0.4s;

	:hover {
		box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
	}

	:focus {
		box-shadow: 0 0 0 0.15vw skyblue;
	}
`
