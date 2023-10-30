import {ChairsService} from "@/services/chairs.service";
import Chairs from "@/components/screens/chairs/Chairs";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import ErrorPage from "next/error";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);
const ChairsPage = ({items, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <Chairs items={items} header_items={header_items} footer_items={footer_items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const header = await HeaderService.getAll(locale);
	const footer = await FooterService.getAll(locale);
	const items = await ChairsService.getAll(locale)
	
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
			items: items.data
		},
		revalidate: REVALIDATE_TIME,
	}
}
export default ChairsPage