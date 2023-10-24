import axios from "axios";

axios.defaults.baseURL = process.env.API_URL;
export const ApplicantService = {
	async getAll(locale) {
		const {data} = await axios.get('/applicant', {
			params: {
				populate: 'deep',
				locale: locale
			}
		})
		return data;
	},
}