import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HeaderService = {
	async getAll() {
		const {data} = await axios.get('/header', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
}