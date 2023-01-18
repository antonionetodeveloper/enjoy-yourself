import { BackgroundGradientTop } from "../components/backgrounds/Rainbow_background"
import { TextFlickerInGlow } from "../components/text/Text-flicker-in-glow"
import { Footer } from "../components/_footer/footer"

import { CatSection } from "../components/_page_sections/index/Cat/Cat_section"
import { ChatGPT } from "../components/_page_sections/index/chatGPT/ChatGPT"
import { DogSection } from "../components/_page_sections/index/dog/Dog_section"
import { FunFactsAboutYou } from "../components/_page_sections/index/fun/Fun"

import CatAPI from "../services/Apis/Cat/request"
import CatFactAPI from "../services/Apis/CatFact/request"
import DogAPI from "../services/Apis/Dog/request"
import DogFactAPI from "../services/Apis/DogFact/request"

export default function Home({ dogImage, dogFact, catImage, catFact }: any) {
	return (
		<>
			<header>
				<BackgroundGradientTop>
					<TextFlickerInGlow text={"Just for fun"} semantic={"h1"} />
				</BackgroundGradientTop>
			</header>
			<main>
				<CatSection catFact={catFact} catImage={catImage} />
				<FunFactsAboutYou />
				<DogSection dogFact={dogFact} dogImage={dogImage} />
				<ChatGPT />
			</main>
			<Footer />
		</>
	)
}

export async function getStaticProps() {
	const responseDog = await DogAPI.get("api/breeds/image/random", {})
	const responseFactDog = await DogFactAPI.get("api/v2/facts?limit=80", {})
	const responseCatImage = await CatAPI.get("v1/images/search", {})
	const responseFactCat = await CatFactAPI.get("fact", {})

	return {
		props: {
			dogImage: responseDog.data.message,
			dogFact: responseFactDog.data.data[0].attributes.body,
			catImage: responseCatImage.data[0].url,
			catFact: responseFactCat.data.fact,
		},
	}
}
