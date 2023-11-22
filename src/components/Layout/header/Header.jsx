import styles from './Header.module.sass'
import Navbar from "@/components/ui/navbar/Navbar";
import {HeaderService} from "@/services/header.service";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const Header = ({headerInfo}) => {
	// const [headerInfo, setHeaderInfo] = useState(null);
	const {locale} = useRouter();
	console.log(locale)
	//
	// useEffect(() => {
	// 	const fetchData = async (locale) => {
	// 		try {
	// 			const header = await HeaderService.getAll(locale);
	// 			setHeaderInfo(header.data.attributes.Header);
	// 		} catch (error) {
	// 			console.error('Error fetching header:', error);
	// 		}
	// 	};
	// 	fetchData(router.locale);
	// }, [router.locale]);
	return (
		<header className={`header`}>
			<div className="container-w100">
				<div className={`header__row ${styles.header__title}`}>
					<p>{headerInfo?.title}</p>
					<div className={styles.header__lang}>
						<ul>
							<li className={locale === "uk" ? styles.header__disabled : ""}>
								<Link href="/uk">UA</Link>
							</li>
							<li className={locale === "en" ? styles.header__disabled : ""}>
								<Link href="/en">EN</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={`container-large ${styles.header}`}>
				<div className="header__row">
					<Navbar
						withLogo={true}
						leftLinks={headerInfo?.menus[0]}
						rightLinks={headerInfo?.menus[1]}
						logo={headerInfo?.logo}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
