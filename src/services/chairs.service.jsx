import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ChairsService = {
	async getAll() {
		const {data} = await axios.get('/chairs', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
	async getById(id) {
		const {data} = await axios.get(`/chairs/${id}`, {
			params: {
				populate: 'deep',
			},
		})
		return data;
	}
}