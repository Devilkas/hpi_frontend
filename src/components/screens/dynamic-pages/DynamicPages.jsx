import styles from './DynamicPages.module.sass'
import Layout from "@/components/Layout/Layout";

const DynamicPages = ({items, header_items, footer_items}) => {
	return (
		<Layout title={items.attributes.Title} header_items={header_items} footer_items={footer_items}>
			<div className="container-small">
				<div className={styles.students}>
					<div className={styles.students__title}>
						<h2>{items.attributes.Title}</h2>
					</div>
					<div className={styles.students__content}
					     dangerouslySetInnerHTML={{__html: items.attributes.Description}}></div>
				</div>
			</div>
		</Layout>
	)
}

export default DynamicPages