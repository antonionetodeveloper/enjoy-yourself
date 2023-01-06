import axios from "axios"

const DogAPI = axios.create({
	baseURL: "https://dog.ceo/",
	data: {},
	headers: {},
})

export default DogAPI
