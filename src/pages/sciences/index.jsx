import {SciencesService} from "@/services/sciences.service";
import Sciences from "@/components/screens/sciences/Sciences";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import ErrorPage from "next/error";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);
const SciencesPage = ({items, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <Sciences items={items} header_items={header_items} footer_items={footer_items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const header = await HeaderService.getAll(locale);
	const footer = await FooterService.getAll(locale);
	const items = await SciencesService.getAll(locale)
	
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
export default SciencesPage