import {ContactService} from "@/services/contact.service";
import Contacts from "@/components/screens/contacts/Contacts";

const ContactsPage = ({items}) => {
	
	return <Contacts items={items}/>
}
export const getStaticProps = async () => {
	const items = await ContactService.getAll()
	return {
		props: {
			items: items.data
		},
		revalidate: 60,
	}
}
export default ContactsPage