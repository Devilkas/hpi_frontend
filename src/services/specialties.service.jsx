import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const SpecialtiesService = {
	async getAll(locale="uk") {
		try {
			const {data} = await axios.get(`/specialties`, {
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
	async getAllSp(locale="uk") {
		try {
			const {data} = await axios.get(`/sp`, {
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
			const {data} = await axios.get(`/specialties/?filters[seo_url][$eq]=${id}`, {
			// const {data} = await axios.get(`/specialties/${id}`, {
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