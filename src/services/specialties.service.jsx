import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const SpecialtiesService = {
	async getAll(locale) {
		const {data} = await axios.get('/specialties', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
	async getAllSp(locale) {
		const {data} = await axios.get('/sp', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
	async getById(id, locale) {
		const {data} = await axios.get(`/specialties/${id}`, {
			params: {
				populate: 'deep',
				locale: locale
			},
		})
		return data;
	}
}