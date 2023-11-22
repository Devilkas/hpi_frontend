import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HistoryOfTheInstituteService = {
	async getAll(locale="uk") {
		// const {data} = await axios.get('/history-of-the-institute', {
		// 	params: {
		// 		populate: 'deep',
		// 		locale: locale
		// 	}
		// })
		// return data;
		try {
			const {data} = await axios.get(`/history-of-the-institute`,  {
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