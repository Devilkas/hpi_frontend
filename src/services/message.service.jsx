import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const MessagesService = {
	
	async sendMessage(formData) {
		const {data} = await axios.post('/messages', formData)
		return data;
	},
}