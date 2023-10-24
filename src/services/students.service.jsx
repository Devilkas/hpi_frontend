import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const StudentsService = {
	async getAll(locale) {
		try {
			const {data} = await axios.get('/student', {
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
}