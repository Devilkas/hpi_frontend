import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const EventsService = {
	async getAll(locale="uk") {
		try {
			const {data} = await axios.get('/events', {
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
			const {data} = await axios.get(`/events/?filters[seo_url][$eq]=${id}`,  {
			// const {data} = await axios.get(`/events/${id}`,  {
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