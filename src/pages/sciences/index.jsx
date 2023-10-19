import {SciencesService} from "@/services/sciences.service";
import Sciences from "@/components/screens/sciences/Sciences";

const SciencesPage = ({items}) => {
	
	return <Sciences items={items}/>
}
export const getStaticProps = async () => {
	const items = await SciencesService.getAll()
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}
export default SciencesPage