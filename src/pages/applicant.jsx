import {ApplicantService} from "@/services/applicant.service";
import Applicant from "@/components/screens/applicant/Applicant";

const ApplicantPage = ({items}) => {
	
	return <Applicant items={items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const items = await ApplicantService.getAll(locale)
	return {
		props: {
			items: items.data
		},
		revalidate: 60,
	}
}
export default ApplicantPage