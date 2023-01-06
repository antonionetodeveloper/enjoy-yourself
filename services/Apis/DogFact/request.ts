import axios from "axios"

const DogFactAPI = axios.create({
	baseURL: "https://dogapi.dog/",
	data: {},
	headers: {},
})

export default DogFactAPI
