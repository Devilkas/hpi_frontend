import styles from './HistoryOfTheInstitute.module.sass'
import Layout from "@/components/Layout/Layout";

const HistoryOfTheInstitute = ({items}) => {
	return (
		<Layout title={items.data.attributes.Title}>
			<div className="container-large">
				<div className={styles.page}>
					<div className={styles.page__title}>
						<h2>{items.data.attributes.Title}</h2>
					</div>
					{items.data.attributes.Description &&
						<div className={styles.page__content}
						     dangerouslySetInnerHTML={{__html: items.data.attributes.Description}}></div>
					}
				</div>
			</div>
		</Layout>
	)
}

export default HistoryOfTheInstitute