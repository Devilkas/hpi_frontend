import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const NewsService = {
	async getAll(locale) {
		const {data} = await axios.get('/news', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
	async getById(id, locale) {
		const {data} = await axios.get(`/news/${id}`, {
			params: {
				populate: 'deep',
				locale: locale
			},
		})
		return data;
	}
}