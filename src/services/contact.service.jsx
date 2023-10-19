import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ContactService = {
	async getAll() {
		const {data} = await axios.get('/contact', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
}