import PageDetail from "@/components/screens/page-detail/PageDetail";
import {SciencesService} from "@/services/sciences.service";

const SciencesDetailPage = ({items}) => {
	return <PageDetail items={items}/>
}

export const getStaticPaths = async () => {
	const item = await SciencesService.getAll()
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
	const items = await SciencesService.getById(String(params?.id))
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}

export default SciencesDetailPage