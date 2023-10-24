import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HistoryOfTheInstituteService = {
	async getAll(locale) {
		const {data} = await axios.get('/history-of-the-institute', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
}