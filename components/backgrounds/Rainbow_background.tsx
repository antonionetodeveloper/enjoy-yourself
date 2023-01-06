import styled from "styled-components"

export const BackgroundGradientTop = (props: any) => {
	return (
		<Container>
			<div className="rainbow_background-container">
				<div className="rainbow_background">
					<div>{props.children}</div>
				</div>
			</div>
		</Container>
	)
}

const Container = styled.div`
	-webkit-animation: color-change-2x 2s linear infinite alternate both;
	animation: color-change-2x 2s linear infinite alternate both;

	.rainbow_background-container {
		overflow: hidden;
	}

	.rainbow_background {
		height: 100vh;
		width: 100vw;
	}

	@-webkit-keyframes color-change-2x {
		0% {
			background: #19dcea;
		}
		100% {
			background: #b22cff;
		}
	}
	@keyframes color-change-2x {
		0% {
			background: #19dcea;
		}
		100% {
			background: #b22cff;
		}
	}
`
