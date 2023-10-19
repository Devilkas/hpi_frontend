import Link from "next/link";
import styles from './Events.module.sass'
import Layout from "@/components/Layout/Layout";
import Image from "next/image";

const Sciences = ({items}) => {
	const formatDate = (dateString) => {
		const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
		const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
		return formattedDate.replace(/\//g, '.');
	};
	return (
		<Layout title="Головна сторінка" description="asd asd" keywords="1,2,3" ogImage="asd">
			<div className="container-large">
				<div className={styles.events}>
					<div className={styles.events__title}>
						<h2>Події</h2>
					</div>
					<div className={styles.events__items}>
						
						{items.data.length ? <>
							{items.data && items.data.map((item, index) => (
								<Link href={`/events/${item.id}`} className={`${styles.events__item}`} key={index}>
									<div className={styles.events__img}>
										<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title}
										       width={item.attributes.Image.data.attributes.width}
										       height={item.attributes.Image.data.attributes.height}/>
									</div>
									<div className={styles.events__content}>
										<div className={styles.events__item__title}>
											<h4>{item.attributes.Title}</h4>
										</div>
										{item.attributes.publishedAt &&
											<div className={styles.events__date}>
												<h4>{formatDate(item.attributes.publishedAt)}</h4>
											</div>
										}
										{item.attributes.short_description && (
											<div className={styles.events__description}>
												<p>{item.attributes.short_description}</p>
											</div>
										)}
									</div>
								</Link>
							))
							}
						</> : (<div> Подій не знайдено!</div>)}
					</div>
					<div className={styles.events__links}>
					
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Sciences