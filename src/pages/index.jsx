import Home from "@/components/screens/home/Home";
import ErrorPage from 'next/error'
import {HomeService} from "@/services/home.service";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";
import {ApiService} from "@/services/api.service";
import {EventsService} from "@/services/events.service";
import {NewsService} from "@/services/news.service";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME);
// const HomePage = ({slides, info, history, events, news, science, header_items, footer_items, no_data = false}) => {
const HomePage = ({slides, events, news, important_news, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	// return <Home slides={slides} info={info} history={history} events={events} news={news} science={science}
	//              header_items={header_items}
	//              footer_items={footer_items}
	// />
	return <Home slides={slides} events={events} news={news} important_news={important_news}
	             header_items={header_items}
	             footer_items={footer_items}
	/>
	
}

export const getStaticProps = async (context) => {
	const {locale} = context
	const header = await HeaderService.getAll(locale);
	const header_logo_title = await ApiService.getAll("uk", "header");
	const footer = await FooterService.getAll(locale);
	const items = await HomeService.getAll(locale);
	const important_news = await NewsService.getByCategory(locale, "vazhlive");
	
	// console.log(header, footer, items)
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
			slides: items.data.attributes.Slider.Slide,
			important_news: {
				main_title: "Важливе",
				items: important_news.data,
			},
			events: {
				main_title: items.data.attributes.event_section_title,
				items: items.data.attributes.events.data,
			},
			news: {
				main_title: items.data.attributes.news_section_title,
				items: items.data.attributes.news.data,
			},
			// info: {
			// 	main_title: items.data.attributes.main_section_title,
			// 	items: [
			// 		{
			// 			title: items.data.attributes.specialty_section_title,
			// 			description: items.data.attributes.main_section_description,
			// 			list: items.data.attributes.specialties.data,
			// 			links: {
			// 				Title: "Дізнатися більше",
			// 				URL: "specialties"
			// 			},
			// 		},
			// 		{
			// 			title: items.data.attributes.chairs_section_title,
			// 			description: items.data.attributes.chairs_description,
			// 			list: items.data.attributes.chairs.data,
			// 			links: items.data.attributes.Chairs_link,
			// 		},
			// 		{
			// 			title: items.data.attributes.regulations_on_the_institute,
			// 			description: "",
			// 			list: "",
			// 			links: {
			// 				Title: "Дізнатися більше",
			// 				URL: items.data.attributes.regulations_on_the_institute_file.data.attributes.url
			// 			}
			// 		},
			// 		{
			// 			title: items.data.attributes.presentation_of_departments,
			// 			description: "",
			// 			list: "",
			// 			links: {
			// 				Title: "Дізнатися більше",
			// 				URL: items.data.attributes.presentation_of_departments_file.data.attributes.url
			// 			}
			// 		},
			// 	],
			// },
			// history: {
			// 	main_title: items.data.attributes.history_section_title,
			// 	items: items.data.attributes.history_section.history_item,
			// 	links: items.data.attributes.history_section.history_link
			// },
			
			// science: {
			// 	main_title: items.data.attributes.Science_section_title,
			// 	items: items.data.attributes.sciences.data,
			// },
		},
		revalidate: REVALIDATE_TIME,
	}
}
export default HomePage