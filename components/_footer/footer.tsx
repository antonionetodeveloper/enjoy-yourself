import styled from "styled-components"

export const Footer = () => {
	return (
		<Container>
			<div>
				<p>Feito por: Antônio Fernandes</p>
			</div>
		</Container>
	)
}

const Container = styled.footer`
	height: 10vh;
	width: 100%;
	transition: 0.5s;

	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	background-color: blue;
	position: absolute;

	div {
		margin: 1vw;
		p {
			color: white;
		}
	}
`
