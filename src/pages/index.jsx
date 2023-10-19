import Home from "@/components/screens/home/Home";
import {HomeService} from "@/services/home.service";


const HomePage = ({slides, info, history, events, news, science}) => {
	return <Home slides={slides} info={info} history={history} events={events} news={news} science={science}/>
}

export const getStaticProps = async () => {
	const homeItems = await HomeService.getAll()
	return {
		props: {
			slides: homeItems.data.attributes.Slider.Slide,
			info: {
				main_title: homeItems.data.attributes.main_section_title,
				items: [
					{
						title: homeItems.data.attributes.specialty_section_title,
						description: homeItems.data.attributes.main_section_description,
						list: homeItems.data.attributes.specialties.data,
						links: {
							Title: "Дізнатися більше",
							URL: "specialties"
						},
					},
					{
						title: homeItems.data.attributes.chairs_section_title,
						description: homeItems.data.attributes.chairs_description,
						list: homeItems.data.attributes.chairs.data,
						links: homeItems.data.attributes.Chairs_link,
					},
					{
						title: homeItems.data.attributes.regulations_on_the_institute,
						description: "",
						list: "",
						links: {
							Title: "Дізнатися більше",
							URL: homeItems.data.attributes.regulations_on_the_institute_file.data.attributes.url
						}
					},
					{
						title: homeItems.data.attributes.presentation_of_departments,
						description: "",
						list: "",
						links: {
							Title: "Дізнатися більше",
							URL: homeItems.data.attributes.presentation_of_departments_file.data.attributes.url
						}
					},
				],
			},
			history: {
				main_title: homeItems.data.attributes.history_section_title,
				items:
				homeItems.data.attributes.history_section.history_item,
				links:
				homeItems.data.attributes.history_section.history_link
			},
			events: {
				main_title: homeItems.data.attributes.event_section_title,
				items:
				homeItems.data.attributes.events.data,
			},
			news: {
				main_title: homeItems.data.attributes.news_section_title,
				items: homeItems.data.attributes.news.data,
			},
			science: {
				main_title: homeItems.data.attributes.Science_section_title,
				items:
				homeItems.data.attributes.sciences.data,
			},
		},
		revalidate: 60,
	}
}
export default HomePage