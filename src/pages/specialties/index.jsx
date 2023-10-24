import {SpecialtiesService} from "@/services/specialties.service";
import Specialties from "@/components/screens/specialties/Specialties";

const EventsPage = ({items}) => {
	
	return <Specialties items={items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const items = await SpecialtiesService.getAllSp(locale)
	return {
		props: {
			items: items.data
		},
		revalidate: 60,
	}
}
export default EventsPage