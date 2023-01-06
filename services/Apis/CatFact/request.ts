import axios from "axios"

const CatFactAPI = axios.create({
	baseURL: "https://catfact.ninja/",
	data: {},
	headers: {},
})

export default CatFactAPI
