import Link from "next/link";
import styles from './SinglePageItem.module.sass';
import {useRouter} from "next/router";
import Image from "next/image";

const SinglePageItems = ({section, content, btnName, isSingle}) => {
	let data = {};
	isSingle ? (data = content.data) : (data = content);
	const router = useRouter();
	const formatDate = (dateString) => {
		const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
		const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
		return formattedDate.replace(/\//g, '.');
	};
	
	return (
		<>
			<div className={`section__page ${styles.page} ${isSingle ? styles.page__single : ""}`}>
				{isSingle ? (
					<div className={`${styles.page__item}`}>
						{data.attributes.publishedAt &&
							<div className={styles.page__date}>
								<h4>{formatDate(data.attributes.publishedAt)}</h4>
							</div>
						}
						{data.attributes?.Image &&
							<div className={styles.page__img}>
								<Image src={data.attributes.Image.data.attributes.url} alt={data.attributes.Title}
								       width={data.attributes.Image.data.attributes.width}
								       height={data.attributes.Image.data.attributes.height}/>
							</div>
						}
						{data.attributes.description !== undefined && data.attributes.description !== "" && (
							<div className={styles.page__content}>
								<div className={styles.page__description}>
									<p>{data.attributes.description}</p>
								</div>
							</div>
						)}
					</div>
				) : (
					data && data.map((item, index) => (
						<Link href={`/${section}/${item.id}`} className={`${styles.page__item}`} key={index}>
							<div className={styles.page__img}>
								<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title}
								       width={item.attributes.Image.data.attributes.width}
								       height={item.attributes.Image.data.attributes.height}/>
							</div>
							<div className={styles.page__content}>
								<div className={styles.page__title}>
									<h4>{item.attributes.Title}</h4>
								</div>
								{item.attributes.publishedAt &&
									<div className={styles.page__date}>
										<h4>{formatDate(item.attributes.publishedAt)}</h4>
									</div>
								}
								{item.attributes.short_description && (
									<div className={styles.page__description}>
										<p>{item.attributes.short_description}</p>
									</div>
								)}
							</div>
						</Link>
					))
				)}
			</div>
			<div className={styles.page__links}>
				{isSingle ? (
					<button type="button" onClick={() => router.back()}>
						Повернутись
					</button>
				) : (
					<Link href={`/${section}`}>{btnName || "Дізнатися більше новин"}</Link>
				)}
			</div>
		</>
	);
};

export default SinglePageItems;
