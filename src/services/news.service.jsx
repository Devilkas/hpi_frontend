import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const NewsService = {
	async getAll(locale="uk") {
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
	async getById(id, locale="uk") {
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
	},
	async getByCategory(locale="uk", category) {
		
		try {
			// https://api.dev.sspu.sumy.ua/api/news?filters[news_categories][seo_url][$eq]=test-parent-category&populate=deep
			const {data} = await axios.get(`/news?filters[news_categories][seo_url][$eq]=${category}`, {
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