import {SciencesService} from "@/services/sciences.service";
import Sciences from "@/components/screens/sciences/Sciences";

const SciencesPage = ({items}) => {
	
	return <Sciences items={items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const items = await SciencesService.getAll(locale)
	return {
		props: {
			items: items
		},
		revalidate: 60,
	}
}
export default SciencesPage