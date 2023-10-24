import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const SciencesService = {
	async getAll(locale) {
		const {data} = await axios.get('/sciences', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
	async getById(id, locale) {
		const {data} = await axios.get(`/sciences/${id}`, {
			params: {
				populate: 'deep',
				locale: locale
			},
		})
		return data;
	}
}