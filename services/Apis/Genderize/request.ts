import axios from "axios"

const GenderizeAPI = axios.create({
	baseURL: "https://api.genderize.io/",
	data: {},
	headers: {},
})

export default GenderizeAPI
