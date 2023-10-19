import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const NewsService = {
	async getAll() {
		const {data} = await axios.get('/news', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
	async getById(id) {
		const {data} = await axios.get(`/news/${id}`, {
			params: {
				populate: 'deep',
			},
		})
		return data;
	}
}