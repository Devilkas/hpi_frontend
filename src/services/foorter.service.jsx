import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const FooterService = {
	async getAll() {
		const {data} = await axios.get('/footer', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
}