import {useState} from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.sass"
import Image from "next/image";
import {useRouter} from "next/router";

const Navbar = ({withLogo = false, leftLinks = [], rightLinks = [], logo = ''}) => {
	const {pathname} = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState([]);
	
	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const toggleSubMenu = (index) => {
		const updatedSubMenuOpen = [...isSubMenuOpen];
		updatedSubMenuOpen[index] = !updatedSubMenuOpen[index];
		setIsSubMenuOpen(updatedSubMenuOpen);
	};
	
	
	const renderLinks = (linksData) => {
		return linksData.map((link, index) => (
			<li key={index} className={pathname === link.path ? styles.menu__linkActive : ''}>
				{link.children ? (
					<>
						<span className={`${styles.menu__subLink} `}
						      onClick={() => toggleSubMenu(index)}>
							{link.label}
						</span>
						<span className={styles.menu__arrow}></span>
						<ul className={`${styles.menu__subList} ${isSubMenuOpen[index] ? styles.menu__subLinkActive : ''}`}>
							{renderLinks(link.children)}
						</ul>
					</>
				) : (
					<Link href={`${link.URL}`}>
						{link.title}
					</Link>
				)}
			</li>
		));
	};
	
	const renderWithLogo = () => (
		<>
			<ul className={styles.menu__list}>
				{renderLinks(leftLinks)}
			</ul>
			<Link href="/" className={styles.logo}>
				<Image
					src={logo.url}
					priority={true}
					width={logo.width}
					height={logo.height}
					alt="logo"
				/>
			</Link>
			<ul className={styles.menu__list}>
				{renderLinks(rightLinks)}
			</ul>
		</>
	);
	
	const renderWithOutLogo = () => (
		<ul className={styles.menu__list}>
			{renderLinks(leftLinks)}
		</ul>
	);
	
	return (
		<div className={styles.menu}>
			<Link href="/" className={styles.logo__mobile}>
				<Image
					src={logo.url}
					priority={true}
					width={logo.width}
					height={logo.height}
					alt="logo"
				/>
			</Link>
			<div className={`${styles.menu__icon} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
				<span></span>
			</div>
			<nav
				className={`${styles.menu__body} ${!withLogo ? styles.fullWidth : ""} ${isMenuOpen ? styles.active : ''}`}>
				{withLogo ? renderWithLogo() : renderWithOutLogo()}
			</nav>
		</div>
	);
};

export default Navbar;
