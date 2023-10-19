import styles from './Students.module.sass'
import Layout from "@/components/Layout/Layout";

const Students = ({items}) => {
	return (
		<Layout title={items.attributes.Title}>
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

export default Students