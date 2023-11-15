import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ApiService = {
	async getAll(locale, path) {
		try {
			const {data} = await axios.get(`/${path}`, {
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
	async getById(id, locale, path) {
		try {
			// https://api.dev.sspu.sumy.ua/api/news?filters[seo_url][$eq]=konkursu-magisterskih-robit&populate=deep
			const {data} = await axios.get(`/${path}?filters[seo_url][$eq]=${id}`, {
				// const {data} = await axios.get(`/news/${id}`, {
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

