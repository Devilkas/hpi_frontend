import {NewsService} from "@/services/news.service";
import PageDetail from "@/components/screens/page-detail/PageDetail";

const NewsDetailPage = ({items}) => {
	return <PageDetail items={items}/>
}

export const getStaticPaths = async () => {
	const item = await NewsService.getAll()
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
	const items = await NewsService.getById(String(params?.id), locale)
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}

export default NewsDetailPage