import styles from './Contacts.module.sass'
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import Image from "next/image";
import SinglePageItems from "@/components/ui/single-page/SinglePageItems";

const Contacts = ({items}) => {
	return (
		<Layout title={items.attributes.Title} description={items.attributes.Title}>
			<div className="container-small">
				<div className={styles.contacts}>
					<div className={styles.contacts__title}>
						<h2>{items.attributes.Title}</h2>
					</div>
					<div className={styles.contacts__content} dangerouslySetInnerHTML={{__html: items.attributes.Description}}></div>
				</div>
			</div>
		</Layout>
	)
}

export default Contacts