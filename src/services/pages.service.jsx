import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const PagesService = {
	async getAll(locale="uk") {
		try {
			const {data} = await axios.get('/pages', {
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
	async getById(id, locale="uk") {
		try {
			const {data} = await axios.get(`/pages/?filters[seo_url][$eq]=${id}`, {
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