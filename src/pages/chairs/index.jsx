import {ChairsService} from "@/services/chairs.service";
import Chairs from "@/components/screens/chairs/Chairs";

const ChairsPage = ({items}) => {
	return <Chairs items={items}/>
}
export const getStaticProps = async () => {
	const items = await ChairsService.getAll()
	return {
		props: {
			items: items.data
		},
		revalidate: 60,
	}
}
export default ChairsPage