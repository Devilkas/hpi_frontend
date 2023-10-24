import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const FooterService = {
	async getAll(locale) {
		const {data} = await axios.get('/footer', {
			params: {
				populate: "deep",
				locale: `${locale}`
			}
		})
		return data;
	},
}