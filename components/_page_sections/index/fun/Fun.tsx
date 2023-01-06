import { useState } from "react"
import styled from "styled-components"
import AgifyAPI from "../../../../services/Apis/AgiFy/request"
import GenderizeAPI from "../../../../services/Apis/Genderize/request"
import { Check } from "../../../buttons/check"

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

	return (
		<Container>
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
								<p>Name: {name}.</p>
								<p>It was researched {count} times.</p>
								<p>I guess you have about {age} years old</p>
								<p>
									You are {gender} within {probabity}% sure.
								</p>
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
