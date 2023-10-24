import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ChairsService = {
	async getAll(locale) {
		const {data} = await axios.get('/chairs', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
	async getById(id, locale) {
		const {data} = await axios.get(`/chairs/${id}`, {
			params: {
				populate: 'deep',
				locale: locale
			},
		})
		return data;
	}
}