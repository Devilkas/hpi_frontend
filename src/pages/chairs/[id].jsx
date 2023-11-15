import {ChairsService} from "@/services/chairs.service";
import ChairsDetail from "@/components/screens/chairs/ChairsDetail";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import ErrorPage from "next/error";
import {ApiService} from "@/services/api.service";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);
const ChairsDetailPage = ({items, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <ChairsDetail items={items} header_items={header_items} footer_items={footer_items}/>
}

export const getStaticPaths = async (context) => {
	const {locale} = context
	const item = await ChairsService.getAll(locale)
	return {
		paths: item.data.map(items => ({
			params: {
				// id: items.id.toString(),
				id: items.attributes.seo_url.toString(),
				locale: locale
			},
		})),
		fallback: 'blocking',
	}
}
export const getStaticProps = async (context) => {
	const {params, locale} = context
	const header = await HeaderService.getAll(locale);
	const header_logo_title = await ApiService.getAll(locale, "header");
	const footer = await FooterService.getAll(locale);
	const items = await ChairsService.getById(String(params?.id), locale)
	if (header === "noData" || footer === "noData" || items === "noData") {
		return {
			props: {
				no_data: true
			}
		}
	}
	return {
		props: {
			header_items:
				{
					title: header_logo_title.data.attributes.Header.title,
					logo: header_logo_title.data.attributes.Header.logo.data.attributes,
					menus: header.data
				},
			footer_items: footer.data.attributes.Footer,
			items: items
		},
		revalidate: REVALIDATE_TIME,
	}
}

export default ChairsDetailPage