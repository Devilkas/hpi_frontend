import {ChairsService} from "@/services/chairs.service";
import ChairsDetail from "@/components/screens/chairs/ChairsDetail";

const ChairsDetailPage = ({items}) => {
	return <ChairsDetail items={items}/>
}

export const getStaticPaths = async () => {
	const item = await ChairsService.getAll()
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
	const items = await ChairsService.getById(String(params?.id))
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}

export default ChairsDetailPage