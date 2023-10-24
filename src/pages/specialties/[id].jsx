import PageDetail from "@/components/screens/page-detail/PageDetail";
import {SpecialtiesService} from "@/services/specialties.service";

const EventsDetailPage = ({items}) => {
	return <PageDetail items={items}/>
}

export const getStaticPaths = async () => {
	const item = await SpecialtiesService.getAll()
	return {
		paths: item.data.map(items => ({
			params: {
				id: items.id.toString()
			}
		})),
		fallback: 'blocking',
	}
}
export const getStaticProps = async (context) => {
	const {params, locale} = context
	const items = await SpecialtiesService.getById(String(params?.id), locale)
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}

export default EventsDetailPage