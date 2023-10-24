import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HeaderService = {
	async getAll(locale) {
		try {
			const {data} = await axios.get('/header', {
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