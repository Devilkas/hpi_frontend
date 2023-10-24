import Home from "@/components/screens/home/Home";
import ErrorPage from 'next/error'
import {HomeService} from "@/services/home.service";
import {HeaderService} from "@/services/header.service";
import {FooterService} from "@/services/foorter.service";

const HomePage = ({slides, info, history, events, news, science, header_items, footer_items, no_data = false}) => {
	if (no_data) {
		return <ErrorPage statusCode={404}/>
	}
	return <Home slides={slides} info={info} history={history} events={events} news={news} science={science}
	             header_items={header_items}
	             footer_items={footer_items}
	/>
}

export const getStaticProps = async (context) => {
	const {locale} = context
	const header = await HeaderService.getAll(locale);
	const footer = await FooterService.getAll(locale);
	const items = await HomeService.getAll(locale);
	
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
			slides: items.data.attributes.Slider.Slide,
			info: {
				main_title: items.data.attributes.main_section_title,
				items: [
					{
						title: items.data.attributes.specialty_section_title,
						description: items.data.attributes.main_section_description,
						list: items.data.attributes.specialties.data,
						links: {
							Title: "Дізнатися більше",
							URL: "specialties"
						},
					},
					{
						title: items.data.attributes.chairs_section_title,
						description: items.data.attributes.chairs_description,
						list: items.data.attributes.chairs.data,
						links: items.data.attributes.Chairs_link,
					},
					{
						title: items.data.attributes.regulations_on_the_institute,
						description: "",
						list: "",
						links: {
							Title: "Дізнатися більше",
							URL: items.data.attributes.regulations_on_the_institute_file.data.attributes.url
						}
					},
					{
						title: items.data.attributes.presentation_of_departments,
						description: "",
						list: "",
						links: {
							Title: "Дізнатися більше",
							URL: items.data.attributes.presentation_of_departments_file.data.attributes.url
						}
					},
				],
			},
			history: {
				main_title: items.data.attributes.history_section_title,
				items: items.data.attributes.history_section.history_item,
				links: items.data.attributes.history_section.history_link
			},
			events: {
				main_title: items.data.attributes.event_section_title,
				items: items.data.attributes.events.data,
			},
			news: {
				main_title: items.data.attributes.news_section_title,
				items: items.data.attributes.news.data,
			},
			science: {
				main_title: items.data.attributes.Science_section_title,
				items: items.data.attributes.sciences.data,
			},
		},
		revalidate: 60,
	}
}
export default HomePage