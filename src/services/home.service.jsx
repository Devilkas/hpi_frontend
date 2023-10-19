import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HomeService = {
	async getAll() {
		const {data} = await axios.get('/home', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	}
}