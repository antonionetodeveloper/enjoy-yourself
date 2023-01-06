import styled from "styled-components"

// eslint-disable-next-line react/prop-types
export const Refresh = ({ doItOnClcik }) => {
	return (
		<Container onClick={doItOnClcik}>
			<img src="/refresh.svg" alt="refresh" className="refresh" />
		</Container>
	)
}
const Container = styled.button`
	width: 8vw;
	height: 8vw;
	border: 0px;
	border-radius: 50%;
	background-color: transparent;
	transition: 0.5s;

	:hover {
		background-color: buttonface;
		cursor: pointer;
		animation: rotate-center 0.6s ease-in-out both;
	}

	img.refresh {
		width: 50%;
	}
	@keyframes rotate-center {
		0% {
			-webkit-transform: rotate(0);
			transform: rotate(0);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`
