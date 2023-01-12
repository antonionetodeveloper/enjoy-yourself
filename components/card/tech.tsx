/* eslint-disable react/prop-types */
import styled from "styled-components"

export const TechCard = (props) => {
	return (
		<Container>
			<div className="card">{props.children}</div>
		</Container>
	)
}

const Container = styled.div`
	.card {
		width: 35vw;
		height: 70vh;
		background: #07182e;
		position: relative;
		display: flex;
		place-content: center;
		place-items: center;
		overflow: hidden;
		border-radius: 20px;
	}

	.card::before {
		content: "";
		position: absolute;
		width: 200px;
		background-image: linear-gradient(
			180deg,
			rgb(0, 183, 255),
			rgb(255, 48, 255)
		);
		height: 150%;
		animation: rotBGimg 3s linear infinite;
		transition: all 0.2s linear;
	}

	@keyframes rotBGimg {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.card::after {
		content: "";
		position: absolute;
		background: #07182e;
		inset: 5px;
		border-radius: 15px;
	}
	/* .card:hover:before {
  background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
  animation: rotBGimg 3.5s linear infinite;
} */
`
