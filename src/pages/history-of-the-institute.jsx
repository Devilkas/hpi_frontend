import {HistoryOfTheInstituteService} from "@/services/historyOfTheInstitute.service";
import HistoryOfTheInstitute from "@/components/screens/history-of-the-institute/HistoryOfTheInstitute";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import ErrorPage from "next/error";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);

const HistoryOfTheInstitutePage = ({items, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <HistoryOfTheInstitute items={items} header_items={header_items} footer_items={footer_items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const header = await HeaderService.getAll(locale);
	const footer = await FooterService.getAll(locale);
	const items = await HistoryOfTheInstituteService.getAll(locale)
	
	if (header === "noData" || footer === "noData" || items === "noData") {
		return {
			props: {
				no_data: true
			}
		}
	}
	return {
		props: {
			header_items: header.data.attributes.Header,
			footer_items: footer.data.attributes.Footer,
			items: items
		},
		revalidate: REVALIDATE_TIME,
	}
}
export default HistoryOfTheInstitutePage