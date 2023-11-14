import Link from "next/link";
import styles from './NewsHomeItem.module.sass'
import Image from "next/image";
const NewsHomeItems = ({content, isSingle = false, isHomePage = false}) => {
	return (
		<>
			<div className={`section__news ${styles.news}`}>
				{content && content.slice(0, 4).map((item, index) => (
					<Link href={`/news/${item.attributes.seo_url}`} className={`${styles.news__item}`} key={index}>
						<div className={styles.news__content}>
							<div className={styles.news__title}>
								<h4>{item.attributes.Title}</h4>
							</div>
							<div className={styles.news__description}>
								{item.attributes.short_description}
							</div>
						</div>
						<div className={styles.news__img}>
							<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title} width={item.attributes.Image.data.attributes.width} height={item.attributes.Image.data.attributes.height}/>
						</div>
					</Link>
				))}
			</div>
			<div className={styles.news__links}>
				<Link href="/news">Дізнатися більше новин</Link>
			</div>
		</>
	)
}

export default NewsHomeItems