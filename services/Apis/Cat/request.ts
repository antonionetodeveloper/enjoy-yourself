import axios from "axios"

const CatAPI = axios.create({
	baseURL: "https://api.thecatapi.com/",
	data: {},
	headers: {},
})

export default CatAPI
