import {StudentsService} from "@/services/students.service";
import Students from "@/components/screens/students/Students";

const ContactsPage = ({items}) => {
	
	return <Students items={items}/>
}
export const getStaticProps = async () => {
	const items = await StudentsService.getAll()
	return {
		props: {
			items: items.data
		},
		revalidate: 60,
	}
}
export default ContactsPage