import {NewsService} from "@/services/news.service";
import News from "@/components/screens/news/News";

const NewsPage = ({items}) => {
	
	return <News items={items}/>
}
export const getStaticProps = async () => {
	const items = await NewsService.getAll()
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}
export default NewsPage