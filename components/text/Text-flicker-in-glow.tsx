import styled from "styled-components"

export const TextFlickerInGlow = ({ text, semantic }: any) => {
	if (semantic === "h1")
		return (
			<Container>
				<h1>{text}</h1>
			</Container>
		)

	if (semantic === "h2")
		return (
			<Container>
				<h2>{text}</h2>
			</Container>
		)

	if (semantic === "h3")
		return (
			<Container>
				<h3>{text}</h3>
			</Container>
		)

	if (semantic === "p")
		return (
			<Container>
				<p>{text}</p>
			</Container>
		)
}

const Container = styled.div`
	height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	animation: text-flicker-in-glow 4s linear alternate both;

	h1,
	h2,
	h3,
	p {
		width: 70vw;
		font-size: 5vw;
		text-align: center;
		color: white;

		letter-spacing: 2vw;
	}

	@-webkit-keyframes text-flicker-in-glow {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0;
			text-shadow: none;
		}
		10.1% {
			opacity: 1;
			text-shadow: none;
		}
		10.2% {
			opacity: 0;
			text-shadow: none;
		}
		20% {
			opacity: 0;
			text-shadow: none;
		}
		20.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
		}
		20.6% {
			opacity: 0;
			text-shadow: none;
		}
		30% {
			opacity: 0;
			text-shadow: none;
		}
		30.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		30.5% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		30.6% {
			opacity: 0;
			text-shadow: none;
		}
		45% {
			opacity: 0;
			text-shadow: none;
		}
		45.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		50% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		55% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		55.1% {
			opacity: 0;
			text-shadow: none;
		}
		57% {
			opacity: 0;
			text-shadow: none;
		}
		57.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}
		60% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}
		60.1% {
			opacity: 0;
			text-shadow: none;
		}
		65% {
			opacity: 0;
			text-shadow: none;
		}
		65.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
		}
		75% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
		}
		75.1% {
			opacity: 0;
			text-shadow: none;
		}
		77% {
			opacity: 0;
			text-shadow: none;
		}
		77.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
		85% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
		85.1% {
			opacity: 0;
			text-shadow: none;
		}
		86% {
			opacity: 0;
			text-shadow: none;
		}
		86.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
		100% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
	}
	@keyframes text-flicker-in-glow {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0;
			text-shadow: none;
		}
		10.1% {
			opacity: 1;
			text-shadow: none;
		}
		10.2% {
			opacity: 0;
			text-shadow: none;
		}
		20% {
			opacity: 0;
			text-shadow: none;
		}
		20.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
		}
		20.6% {
			opacity: 0;
			text-shadow: none;
		}
		30% {
			opacity: 0;
			text-shadow: none;
		}
		30.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		30.5% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		30.6% {
			opacity: 0;
			text-shadow: none;
		}
		45% {
			opacity: 0;
			text-shadow: none;
		}
		45.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		50% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		55% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
				0 0 60px rgba(255, 255, 255, 0.25);
		}
		55.1% {
			opacity: 0;
			text-shadow: none;
		}
		57% {
			opacity: 0;
			text-shadow: none;
		}
		57.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}
		60% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35);
		}
		60.1% {
			opacity: 0;
			text-shadow: none;
		}
		65% {
			opacity: 0;
			text-shadow: none;
		}
		65.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
		}
		75% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
		}
		75.1% {
			opacity: 0;
			text-shadow: none;
		}
		77% {
			opacity: 0;
			text-shadow: none;
		}
		77.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
		85% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
				0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
		85.1% {
			opacity: 0;
			text-shadow: none;
		}
		86% {
			opacity: 0;
			text-shadow: none;
		}
		86.1% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
		100% {
			opacity: 1;
			text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
				0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
				0 0 100px rgba(255, 255, 255, 0.1);
		}
	}
`
