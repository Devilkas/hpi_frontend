import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const EventsService = {
	async getAll(locale) {
		const {data} = await axios.get('/events', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
	async getById(id, locale) {
		const {data} = await axios.get(`/events/${id}`, {
			params: {
				populate: 'deep',
				locale: locale
			},
		})
		return data;
	}
}