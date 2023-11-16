import styles from './DynamicPages.module.sass'
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import SinglePageItems from "@/components/ui/single-page/SinglePageItems";

const DynamicPages = ({items, header_items, footer_items}) => {
	// console.log("items", items.data[0])
	return (
		<Layout title={items.data[0].attributes.Title} header_items={header_items} footer_items={footer_items}>
			<div className="container-large">
				<div className={styles.dynamicPage}>
					<div className={styles.dynamicPage__title}>
						<h2>{items.data[0].attributes?.Title}</h2>
					</div>
					<div className={styles.dynamicPage__content}>
						<div
							className={`${styles.dynamicPage__item} ${items.data[0].attributes.Image.data === null ? "" : styles.dynamicPage__item__withImg}`}>
							{items.data[0].attributes.Image.data === null ? "" : (
								<div className={styles.dynamicPage__img}>
									<Image
										src={items.data[0].attributes.Image.data.attributes.url}
										alt={items.data[0].attributes.Title}
										width={items.data[0].attributes.Image.data.attributes.width}
										height={items.data[0].attributes.Image.data.attributes.height}
									/>
								</div>
							)}
							<div
								className={styles.dynamicPage__content}
								dangerouslySetInnerHTML={{__html: items.data[0].attributes?.Content}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default DynamicPages