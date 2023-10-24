import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const NewsService = {
	async getAll(locale) {
		try {
			const {data} = await axios.get(`/news`, {
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
	async getById(id, locale) {
		try {
			const {data} = await axios.get(`/news/${id}`, {
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