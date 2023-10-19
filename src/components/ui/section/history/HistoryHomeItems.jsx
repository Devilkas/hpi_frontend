import styles from "./HistoryHomeItem.module.sass"
import Link from "next/link";
import Image from "next/image";

const HistoryHomeItems = ({content, links}) => {
	return (
		<>
			<div className={`section__history ${styles.history}`}>
				{content && content.map((item, index) => (
					<div className={`${styles.history__item}`} key={index}>
						<div className={styles.history__description}>
							{item.Description}
						</div>
						<div className={styles.history__img}>
							<Image src={item.Image.data.attributes.url} alt={item.Description}
							       width={item.Image.data.attributes.width}
							       height={item.Image.data.attributes.height}/>
						</div>
					</div>
				))}
			</div>
			
			{links && (
				<div className={styles.history__links}>
					{Array.isArray(links) ? (
						links.map((item, index) => (
							<Link key={index} href={item.URL} target={item.target}>
								{item.Title}
							</Link>
						))
					) : (
						<Link href={links.URL} target={links.target}>
							{links.Title}
						</Link>
					)}
				</div>
			)}
		
		
		</>
	)
}

export default HistoryHomeItems