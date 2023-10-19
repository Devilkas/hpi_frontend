import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HistoryOfTheInstituteService = {
	async getAll() {
		const {data} = await axios.get('/history-of-the-institute', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
}