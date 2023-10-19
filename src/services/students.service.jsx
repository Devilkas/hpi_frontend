import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const StudentsService = {
	async getAll() {
		const {data} = await axios.get('/student', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
}