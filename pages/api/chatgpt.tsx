import { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (!configuration.apiKey) {
		res.status(500).json({
			error: {
				message:
					"OpenAI API key not configured, please follow instructions in README.md",
			},
		})
		return
	}

	const question = req.query.question || req.body.question || ""
	if (question.trim().length === 0) {
		res.status(400).json({
			error: {
				message: "Please enter a valid question",
			},
		})
		return
	}
	try {
		const completion = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: generatePrompt(question),
			temperature: 0.6,
			max_tokens: 150,
			top_p: 1,
			frequency_penalty: 0.0,
			presence_penalty: 0.0,
		})
		res.status(200).json({ result: completion.data.choices[0].text })
	} catch (error) {
		if (error.response) {
			console.error(error.response.status, error.response.data)
			res.status(error.response.status).json(error.response.data)
		}

		if (error instanceof Error) {
			console.error(`Error with OpenAI API request: ${error.message}`)
			res.status(500).json({
				error: {
					message: "An error occurred during your request.",
				},
			})
		}
	}
}

function generatePrompt(question: string) {
	return `
	${question}
`
}
