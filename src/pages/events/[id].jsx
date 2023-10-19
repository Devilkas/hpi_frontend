import PageDetail from "@/components/screens/page-detail/PageDetail";
import {EventsService} from "@/services/events.service";

const EventsDetailPage = ({items}) => {
	return <PageDetail items={items}/>
}

export const getStaticPaths = async () => {
	const item = await EventsService.getAll()
	return {
		paths: item.data.map(items => ({
			params: {
				id: items.id.toString()
			}
		})),
		fallback: 'blocking',
	}
}
export const getStaticProps = async ({params}) => {
	const items = await EventsService.getById(String(params?.id))
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}

export default EventsDetailPage