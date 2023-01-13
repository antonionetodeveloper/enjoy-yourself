import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	@font-face {
   	font-family: MADE-Soulmaze;
    	src: url("/fonts/MADE Soulmaze PERSONAL USE.otf") format("opentype");
	}

	body {
		margin: 0px ;

		h1, h2, h3, p, span{
			margin: 0px;
		}

		h1, h2, h3, button{
			font-family: "MADE-Soulmaze";
		}

		p{
			font-family: 'Rokkitt', serif;
		}

		::-webkit-scrollbar{
			width: 10px;
			background-color: white;
		}

		::-webkit-scrollbar-thumb{
			background-color: black;
			border: white 2px solid;
			border-radius: 10vw;
		}

	}

`

export default GlobalStyle
