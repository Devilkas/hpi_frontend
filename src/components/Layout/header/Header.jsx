import styles from './Header.module.sass'
import Navbar from "@/components/ui/navbar/Navbar";
import {HeaderService} from "@/services/header.service";
import {useEffect, useState} from "react";

const Header = () => {
	const [headerInfo, setHeaderInfo] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			try {
				const header = await HeaderService.getAll();
				setHeaderInfo(header.data.attributes.Header);
			} catch (error) {
				console.error('Error fetching header:', error);
			}
		};
		fetchData();
	}, []);

	return (
		<header className={`header`}>
			<div className="container-w100">
				<div className={`header__row ${styles.header__title}`}>
					<p>{headerInfo?.title}</p>
				</div>
			</div>
			<div className={`container-large ${styles.header}`}>
				<div className="header__row">
					<Navbar withLogo={true} leftLinks={headerInfo?.items} rightLinks={headerInfo?.item}
					        logo={headerInfo?.logo.data.attributes}/>
				</div>
			</div>
		</header>
	)
}
export default Header
