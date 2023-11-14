import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ChairsService = {
	async getAll(locale) {
		try {
			const {data} = await axios.get('/chairs', {
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
			const {data} = await axios.get(`/chairs/?filters[seo_url][$eq]=${id}`, {
			// const {data} = await axios.get(`/chairs/${id}`, {
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