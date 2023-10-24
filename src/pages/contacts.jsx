import {ContactService} from "@/services/contact.service";
import Contacts from "@/components/screens/contacts/Contacts";

const ContactsPage = ({items}) => {
	
	return <Contacts items={items}/>
}
export const getStaticProps = async (context) => {
	const {locale} = context
	const items = await ContactService.getAll(locale)
	return {
		props: {
			items: items.data
		},
		revalidate: 60,
	}
}
export default ContactsPage