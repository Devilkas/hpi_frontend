import {ChairsService} from "@/services/chairs.service";
import ChairsDetail from "@/components/screens/chairs/ChairsDetail";

const ChairsDetailPage = ({items}) => {
	return <ChairsDetail items={items}/>
}

export const getStaticPaths = async (context) => {
	const {locale} = context
	const item = await ChairsService.getAll(locale)
	return {
		paths: item.data.map(items => ({
			params: {
				id: items.id.toString(),
				locale: locale
			},
		})),
		fallback: 'blocking',
	}
}
export const getStaticProps = async (context) => {
	const {params, locale} = context
	const items = await ChairsService.getById(String(params?.id), locale)
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}

export default ChairsDetailPage