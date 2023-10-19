import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const SpecialtiesService = {
	async getAll() {
		const {data} = await axios.get('/specialties', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
	async getAllSp() {
		const {data} = await axios.get('/sp', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
	async getById(id) {
		const {data} = await axios.get(`/specialties/${id}`, {
			params: {
				populate: 'deep',
			},
		})
		return data;
	}
}