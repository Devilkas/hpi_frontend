import {HistoryOfTheInstituteService} from "@/services/historyOfTheInstitute.service";
import HistoryOfTheInstitute from "@/components/screens/history-of-the-institute/HistoryOfTheInstitute";

const HistoryOfTheInstitutePage = ({items}) => {
	return <HistoryOfTheInstitute items={items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const items = await HistoryOfTheInstituteService.getAll(locale)
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}
export default HistoryOfTheInstitutePage