import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const HomeService = {
	async getAll(locale) {
		const {data} = await axios.get('/home', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	}
}