/* eslint-disable react/no-unknown-property */
import type { AppProps } from "next/app"
import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { ThemeProvider, DefaultTheme } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"

const theme: DefaultTheme = {
	colors: {
		primary: "#fff",
		secondary: "#fff",
	},
}

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleStart = (url: string) => {
			console.log(`Loading: ${url}`)
			NProgress.start()
		}

		const handleStop = () => {
			NProgress.done()
		}

		router.events.on("routeChangeStart", handleStart)
		router.events.on("routeChangeComplete", handleStop)
		router.events.on("routeChangeError", handleStop)

		return () => {
			router.events.off("routeChangeStart", handleStart)
			router.events.off("routeChangeComplete", handleStop)
			router.events.off("routeChangeError", handleStop)
		}
	}, [router])

	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@100;200;300;400;500;600;700;800;900&display=swap"
				rel="stylesheet"
			></link>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
