import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const SciencesService = {
	async getAll() {
		const {data} = await axios.get('/sciences', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
	async getById(id) {
		const {data} = await axios.get(`/sciences/${id}`, {
			params: {
				populate: 'deep',
			},
		})
		return data;
	}
}