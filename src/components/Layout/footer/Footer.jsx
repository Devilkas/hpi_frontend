import styles from './Footer.module.sass'
import Form from "@/components/ui/form/Form";
import Link from "next/link";
import {useEffect, useState} from "react";
import {FooterService} from "@/services/foorter.service";
import {useRouter} from "next/router";

const Footer = () => {
	const [footerInfo, setFooterInfo] = useState(null);
	const router = useRouter();
	
	useEffect(() => {
		const fetchData = async (locale) => {
			try {
				const footer = await FooterService.getAll(locale);
				setFooterInfo(footer.data.attributes.Footer);
			} catch (error) {
				console.error('Error fetching footer:', error);
			}
		};
		fetchData(router.locale);
	}, [router.locale]); // Include router.locale in the dependency array
	
	const {id, title, send, ...inputs} = footerInfo?.contact_form || {};
	return (
		<footer className={`footer ${styles.footer}`}>
			<div className="container-large">
				<div className={styles.footer__row}>
					<div className={styles.footer__items}>
						<div className="footer__item">
							<div className={styles.footer__title}>
								<h3>{footerInfo?.contacts.Title}</h3>
							</div>
							<div className={`${styles.footer__content}`}>
								<div className={styles.footer__address}>
									<p>{footerInfo?.contacts.Address}</p>
								</div>
								<div className={styles.footer__phones}>
									<p>{footerInfo?.contacts.Phones}</p>
								</div>
								<div className={styles.footer__secretary}>
									<p>{footerInfo?.contacts.Secretary}</p>
								</div>
							</div>
						</div>
						<div className={`footer__item ${styles.footer__form}`}>
							<div className={styles.footer__title}>
								<h3>{footerInfo?.contact_form.title}</h3>
							</div>
							<div className={`${styles.footer__content}`}>
								<Form inputs={inputs} butName={footerInfo?.contact_form.send}/>
							</div>
						</div>
						<div className="footer__item">
							<div className={styles.footer__title}>
								<h3>Ми в соцiальних мережах</h3>
							</div>
							<div className={`${styles.footer__content}`}>
								<div className={`${styles.footer__items} ${styles.footer__social}`}>
									{footerInfo?.social_media && footerInfo?.social_media.map((item, index) => (
										<a key={index} href={item.URL} target="_blank" className={styles.footer__item}>
											<object data={item.icon.data.attributes.url} width={item.icon.data.attributes.width}
											        height={item.icon.data.attributes.height}></object>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
			<div className="container-w100">
				<div className={`${styles.footer__row} ${styles.footer__dark}`}>
					{/*<div className={styles.footer__menu}>*/}
					{/*	<ul>*/}
					{/*		<li>*/}
					{/*			<Link href="#">Вступнику</Link>*/}
					{/*		</li>*/}
					{/*		<li>*/}
					{/*			<Link href="#">Прес-служба</Link>*/}
					{/*		</li>*/}
					{/*		<li>*/}
					{/*			<Link href="#">Підтримка веб-сайтів університету</Link>*/}
					{/*		</li>*/}
					{/*		<li>*/}
					{/*			<Link href="#">Контакти</Link>*/}
					{/*		</li>*/}
					{/*		<li>*/}
					{/*			<Link href="#">Мапа сайту</Link>*/}
					{/*		</li>*/}
					{/*	</ul>*/}
					{/*</div>*/}
					<div className={styles.footer__copyright}>
						<p>{footerInfo?.Copyright}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer