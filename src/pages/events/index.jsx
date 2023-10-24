import {EventsService} from "@/services/events.service";
import Events from "@/components/screens/events/Events";

const EventsPage = ({items}) => {
	
	return <Events items={items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const items = await EventsService.getAll(locale)
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}
export default EventsPage