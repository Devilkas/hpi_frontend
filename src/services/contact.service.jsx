import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ContactService = {
	async getAll(locale="uk") {
		try {
			const {data} = await axios.get('/contact', {
				params: {
					populate: 'deep',
					locale: locale
				}
			})
			return data;
		} catch (e) {
			return "noData"
		}
	},
}