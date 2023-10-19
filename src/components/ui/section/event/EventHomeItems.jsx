import styles from "./EventHomeItems.module.sass"
import Link from "next/link";
import Image from "next/image";

const EventHomeItems = ({content}) => {
	const formatDate = (dateString) => {
		const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
		const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
		return formattedDate.replace(/\//g, '.');
	};
	return (
		<div className={`section__events ${styles.events}`}>
			{/*{content && content.slice(0, 4).map((item, index) => (*/}
			{content && content.map((item, index) => (
				<Link href={`/events/${item.id}`} className={`${styles.events__item}`} key={index}>
					<div className={styles.events__date}>
						<p>{formatDate(item.attributes.publishedAt)}</p>
					</div>
					<div className={styles.events__img}>
						<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title} width={item.attributes.Image.data.attributes.width} height={item.attributes.Image.data.attributes.height}/>
					</div>
					<div className={styles.events__content}>
						<div className={styles.events__title}>
							<h4>{item.attributes.Title}</h4>
						</div>
						<div className={styles.events__description}>
							{item.attributes.short_description}
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default EventHomeItems