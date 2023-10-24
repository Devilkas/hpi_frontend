import styles from './Chairs.module.sass'
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const ChairsDetail = ({items}) => {
	const [activeLink, setActiveLink] = useState(0);
	const [activeTab, setActiveTab] = useState(0);
	
	const handleTabClick = (index) => {
		setActiveLink(index);
		setActiveTab(index);
	};
	
	return (
		<Layout title="Кафедри">
			<div className="container-large">
				<div className={styles.chairs}>
					<div className={styles.chairs__title}>
						<h2>Кафедра {items.data.attributes.Title}</h2>
					</div>
					<div className={styles.chairs__items}>
						{items && (
							<div className={styles.chairs__item}>
								<Link target="_blank" href={`${items.data.attributes.site_url || ""}`} className={`${styles.chairs__info} ${styles.chairs__infoLeft}`}>
									<div className={styles.chairs__subtitle}>
										<h3>{items.data.attributes.Title}</h3>
									</div>
									<div className={styles.chairs__logo}>
										<Image src={items.data.attributes.Logo.data[0].attributes.url}
										       width={items.data.attributes.Logo.data[0].attributes.width}
										       height={items.data.attributes.Logo.data[0].attributes.height}
										       alt={items.data.attributes.Title}/>
									</div>
								</Link>
								<div className={`${styles.chairs__info} ${styles.chairs__infoRight}`}>
									<div className={styles.chairs__decription}>
										<div className={styles.chairs__content}>
											<div className={styles.chairs__headOfDepartment}>
												<span
													className={styles.chairs__textBold}>{items.data.attributes.head_of_department_label}</span>
												<span className={styles.chairs__text}>{items.data.attributes.head_of_department_value}</span>
											</div>
											<div className={styles.chairs__contancts}>
												<span className={styles.chairs__textBold}>{items.data.attributes.contacts_label}</span>
												<span className={styles.chairs__text}>{items.data.attributes.contacts_value}</span>
											</div>
											<div className={styles.chairs__email}>
												<span className={styles.chairs__textBold}>{items.data.attributes.email_label}</span>
												<Link href={`mailto:${items.data.attributes.email_value}`}
												      className={styles.chairs__text}>{items.data.attributes.email_value}</Link>
											</div>
											<p
												className={styles.chairs__textBold}>{items.data.attributes.conducts_training_in_specialties_label}</p>
										</div>
										<div className={styles.chairs__img}>
											<Image src={items.data.attributes.avatar.data[0].attributes.url}
											       width={items.data.attributes.avatar.data[0].attributes.width}
											       height={items.data.attributes.avatar.data[0].attributes.height}
											       alt={items.data.attributes.avatar.data[0].attributes.name}/>
										</div>
									</div>
									{items.data.attributes.degre && (
										<div className={styles.tab}>
											<div className={styles.tab__nav}>
												{items.data.attributes.degre.map((degree, index) => (
													<button
														className={`${styles.tab__link} ${index === activeLink ? styles.tab__activeLink : ''}`}
														data-degre={items.data.attributes.degre[activeLink]?.Title}
														onClick={() => handleTabClick(index)}
														key={index}>{degree.Title}</button>
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
													{items.data.attributes.degre.map((degree, index) => (
														<div className={`${styles.tab__list} ${index === activeTab ? styles.tab__active : ''}`}
														     data-degre={items.data.attributes.degre[activeLink]?.Title} key={index}>
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
						)
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ChairsDetail