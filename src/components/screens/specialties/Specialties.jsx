import styles from './Specialties.module.sass'
import Layout from "@/components/Layout/Layout";
import SinglePageItems from "@/components/ui/single-page/SinglePageItems";
import Link from "next/link";
import {useState} from "react";

const Sciences = ({items, header_items, footer_items}) => {
	const [activeLink, setActiveLink] = useState(0);
	const [activeTab, setActiveTab] = useState(0);
	
	const handleTabClick = (index) => {
		setActiveLink(index);
		setActiveTab(index);
	};
	return (
		<Layout title={items.attributes.Title} description={items.attributes.Description}  header_items={header_items} footer_items={footer_items}>
			<div className="container-small">
				<div className={styles.specialties}>
					<div className={styles.specialties__title}>
						<h2>{items.attributes.Title}</h2>
					</div>
					<div className={styles.specialties__info}
					     dangerouslySetInnerHTML={{__html: items.attributes.Description}}></div>
					{items.attributes.degre && (
						<div className={styles.tab}>
							<div className={styles.tab__nav}>
								{items.attributes.degre.map((degree, index) => (
									<button
										className={`${styles.tab__link} ${index === activeLink ? styles.tab__activeLink : ''}`}
										data-degre={items.attributes.degre[activeLink]?.Title}
										onClick={() => handleTabClick(index)}
										key={index}>
										{degree.Title}
									</button>
								))}
							</div>
							<div className={styles.tab__items}>
								<div className={`${styles.tab__item}`}>
									<div className={styles.tab__title}>
										<div className={styles.tab__titleItem}>
											<p>Спеціальність</p>
										</div>
										<div className={styles.tab__titleItem}>
											<p>Освітня програма</p>
										</div>
									</div>
									{items.attributes.degre.map((degree, index) => (
										<div className={`${styles.tab__list} ${index === activeTab ? styles.tab__active : ''}`}
										     data-degre={items.attributes.degre[activeLink]?.Title} key={`${index}${degree.id}`}>
											{degree.sp_pr.map((ep, index) => (
												<div className={styles.tab__listItem} key={`${index}${ep.id}`}>
													<div className={styles.tab__listTitle}>
														<Link
															href={`/specialties/${ep.specialty.data.id}`}>{ep.specialty.data.attributes.Title}</Link>
													</div>
													<div className={styles.tab__listContent}>
														<p>{ep.program}</p>
													</div>
												</div>
											))}
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Sciences