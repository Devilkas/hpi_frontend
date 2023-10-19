import styles from './Applicant.module.sass'
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import {useState} from "react";

const Applicant = ({items}) => {
	const [activeLink, setActiveLink] = useState(0);
	const [activeTab, setActiveTab] = useState(0);
	
	const handleTabClick = (index) => {
		setActiveLink(index);
		setActiveTab(index);
	};
	return (
		<Layout title={items.attributes.Title}>
			<div className="container-small">
				<div className={styles.applicant}>
					<div className={styles.applicant__title}>
						<h2>{items.attributes.Title}</h2>
					</div>
					<div className={styles.applicant__description}>
						<h3>{items.attributes.admissions_committee_institute}</h3>
						<div className={styles.applicant__contactDescriptions}
						     dangerouslySetInnerHTML={{__html: items.attributes.Contact}}>
						</div>
					</div>
					<div className={styles.applicant__description}
					     dangerouslySetInnerHTML={{__html: items.attributes.Conditions_of_entry}}></div>
					<div className={styles.applicant__description}>
						<h3>{items.attributes.Specialty}</h3>
						<div className={styles.applicant__specialtyDescription}>
							<p>{items.attributes.specialty_description}</p>
						</div>
						<div className={styles.applicant__specialty}>
							{items.attributes.Degre && (
								<div className={styles.tab}>
									<div className={styles.tab__nav}>
										{items.attributes.Degre.map((degree, index) => (
											<button
												className={`${styles.tab__link} ${index === activeLink ? styles.tab__activeLink : ''}`}
												data-degre={items.attributes.Degre[activeLink]?.Title}
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
											{items.attributes.Degre.map((degree, index) => (
												<div className={`${styles.tab__list} ${index === activeTab ? styles.tab__active : ''}`}
												     data-degre={items.attributes.Degre[activeLink]?.Title}>
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
					<div className={styles.applicant__description}
					     dangerouslySetInnerHTML={{__html: items.attributes.Description}}></div>
				</div>
			</div>
		</Layout>
	)
}

export default Applicant