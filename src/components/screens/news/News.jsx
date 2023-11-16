import Link from "next/link";
import styles from './News.module.sass'
import Layout from "@/components/Layout/Layout";
import Image from "next/image";

const News = ({items, header_items, footer_items}) => {
	const formatDate = (dateString) => {
		const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
		const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
		return formattedDate.replace(/\//g, '.');
	};
	return (
		<Layout title="Новини" header_items={header_items} footer_items={footer_items}>
			<div className="container-large">
				<div className={styles.news}>
					<div className={styles.news__title}>
						<h2>Новини</h2>
					</div>
					<div className={styles.news__items}>
						
						{items.data.length ? <>
							{items.data && items.data.map((item, index) => (
								<Link href={`/news/${item.attributes.seo_url}`} className={`${styles.news__item}`} key={index}>
									<div className={styles.news__img}>
										<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title}
										       width={item.attributes.Image.data.attributes.width}
										       height={item.attributes.Image.data.attributes.height}/>
									</div>
									<div className={styles.news__content}>
										<div className={styles.news__item__title}>
											<h4>{item.attributes.Title}</h4>
										</div>
										{/*{item.attributes.publishedAt &&*/}
										{/*	<div className={styles.news__date}>*/}
										{/*		<h4>{formatDate(item.attributes.publishedAt)}</h4>*/}
										{/*	</div>*/}
										{/*}*/}
										{item.attributes.short_description && (
											<div className={styles.news__description}>
												<p>{item.attributes.short_description}</p>
											</div>
										)}
									</div>
								</Link>
							))
							}
						</> : (<div> Новин не знайдено!</div>)}
					</div>
					<div className={styles.news__links}>
					
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default News