import PageDetail from "@/components/screens/page-detail/PageDetail";
import {SpecialtiesService} from "@/services/specialties.service";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import ErrorPage from "next/error";
import {ApiService} from "@/services/api.service";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);
const EventsDetailPage = ({items, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <PageDetail items={items} header_items={header_items} footer_items={footer_items}/>
}

export const getStaticPaths = async (context) => {
	const {locale} = context
	const item = await SpecialtiesService.getAll(locale)
	return {
		paths: item.data.map(items => ({
			params: {
				id: items.attributes.seo_url.toString()
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
	const items = await SpecialtiesService.getById(String(params?.id), locale)
	
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

export default EventsDetailPage