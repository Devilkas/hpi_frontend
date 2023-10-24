import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HomeService = {
	async getAll(locale) {
		try {
			const {data} = await axios.get('/home', {
				params: {
					populate: 'deep',
					locale: locale
				}
			})
			return data;
		} catch (e) {
			return "noData"
		}
	}
}