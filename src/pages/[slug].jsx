import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import ErrorPage from "next/error";
import DynamicPages from "@/components/screens/dynamic-pages/DynamicPages";
import {ApiService} from "@/services/api.service";
import {PagesService} from "@/services/pages.service";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);
const DynamicPage = ({items, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <DynamicPages items={items} header_items={header_items} footer_items={footer_items}/>
	// return <ErrorPage statusCode={404}/>
}

export const getStaticPaths = async () => {
	const item = await PagesService.getAll()
	return {
		paths: item.data.map(items => ({
			params: {
				slug: items.attributes.seo_url.toString()
			}
		})),
		fallback: 'blocking',
	}
}
export const getStaticProps = async (context) => {
	const {params, locale} = context
	const header = await HeaderService.getAll(locale);
	const header_logo_title = await ApiService.getAll(locale, "header");
	const footer = await FooterService.getAll(locale);
	const items = await PagesService.getById(String(params?.slug), locale);
	if (header === "noData" || footer === "noData" || items === "noData" || items?.data.length === 0) {
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


export default DynamicPage