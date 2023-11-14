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
			// https://api.dev.sspu.sumy.ua/api/news?filters[seo_url][$eq]=konkursu-magisterskih-robit&populate=deep
			const {data} = await axios.get(`/news?filters[seo_url][$eq]=${id}`, {
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