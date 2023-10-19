import {EventsService} from "@/services/events.service";
import Events from "@/components/screens/events/Events";

const EventsPage = ({items}) => {
	
	return <Events items={items}/>
}
export const getStaticProps = async () => {
	const items = await EventsService.getAll()
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}
export default EventsPage