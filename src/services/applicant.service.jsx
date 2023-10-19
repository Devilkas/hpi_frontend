import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ApplicantService = {
	async getAll() {
		const {data} = await axios.get('/applicant', {
			params: {
				populate: 'deep',
			}
		})
		return data;
	},
}