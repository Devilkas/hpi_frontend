import styles from "./InfoHomeItems.module.sass"
import Link from "next/link";
import Image from "next/image";

const InfoHomeItems = ({content}) => {
	return (
		<div className={`section__info ${styles.info}`}>
			{content && content.map((item, index) => (
				<div className={`${styles.info__item} ${item.title === 'Кафедри' ? styles.departments : ""}`}
				     key={index}>
					<div className={styles.info__header}>
						<div className={styles.info__title}>
							<h3>{item.title}</h3>
						</div>
						<div className={styles.info__description}>
							{item.description && <p>{item.description}</p>}
							{item.links && (
								<div className={styles.info__links}>
									{Array.isArray(item.links) ? (
										item.links.map((item, index) => (
											<Link key={index} href={item.URL} target={item.target}>
												{item.Title}
											</Link>
										))
									) : (
										<Link href={item.links?.URL} target={item.links.target || "_blank"}>
											{item.links.Title || "Детальніше"}
										</Link>
									)}
								</div>
							)}
						</div>
					</div>
					<div className={styles.info__list}>
						{item.list && item.list.map((listItem, listIndex) => (
							<Link
								className={styles.info__list__item}
								href={
									item.title === "Спеціальності"
										? `/specialties/${listItem.id}`
										: item.title === "Кафедри"
											? listItem.attributes.site_url || ""
											: ""
								}
								target={
									(listItem.attributes.site_url)
										? "_blank"
										: ""
								}
								key={listIndex}
							>
								<div className={styles.info__img}>
									<Image src={listItem.attributes.Image.data.attributes.url} alt={listItem.attributes.Title}
									       width={listItem.attributes.Image.data.attributes.width}
									       height={listItem.attributes.Image.data.attributes.height}/>
								</div>
								<div className={styles.info__overlay}>
									<p>{listItem.attributes.Title}</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default InfoHomeItems