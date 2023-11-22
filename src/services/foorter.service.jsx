import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const FooterService = {
	
	async getAll(locale="uk") {
		try {
			const {data} = await axios.get('/footer', {
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