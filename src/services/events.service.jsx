import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const EventsService = {
	async getAll() {
		const {data} = await axios.get('/events', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
	async getById(id) {
		const {data} = await axios.get(`/events/${id}`, {
			params: {
				populate: 'deep'
			},
		})
		return data;
	}
}