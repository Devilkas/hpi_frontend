import Layout from "@/components/Layout/Layout";
import styles from "@/components/screens/page-detail/PageDetail.module.sass";
import SinglePageItems from "@/components/ui/single-page/SinglePageItems";

const PageDetail = ({items}) => {
	
	return <Layout title={items.data.attributes.Title} description={items.data.attributes.short_description}>
		<div className="container-large">
			<div className={styles.page}>
				<div className={styles.page__title}>
					<h2>{items.data.attributes.Title}</h2>
				</div>
				<div className={styles.page__content}>
					{items && <SinglePageItems content={items} isSingle={true} btnName="Повернутись"/>}
				</div>
			</div>
		</div>
	</Layout>
}

export default PageDetail