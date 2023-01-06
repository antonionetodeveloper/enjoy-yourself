import axios from "axios"

const AgifyAPI = axios.create({
	baseURL: "https://api.agify.io/",
	data: {},
	headers: {},
})

export default AgifyAPI
