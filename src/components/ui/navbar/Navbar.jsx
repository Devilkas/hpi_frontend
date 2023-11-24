import {useState} from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.sass"
import Image from "next/image";
import {useRouter} from "next/router";

const Navbar = ({withLogo = false, leftLinks = [], rightLinks = [], logo = ''}) => {
	const {pathname, locale} = useRouter()
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState([]);
	
	
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const toggleSubMenu = (index) => {
		// const updatedSubMenuOpen = [...isSubMenuOpen];
		// updatedSubMenuOpen[index] = !updatedSubMenuOpen[index];
		// setIsSubMenuOpen(updatedSubMenuOpen);
	};
	
	const renderLinks = (linksData, level = 0) => {
		const submenuClass = level === 0 ? styles.menu__subList : `${styles.menu__dropdown}`;
		
		return linksData.map((link, index) => (
			<li key={link.id} className={pathname === link.attributes.url ? styles.menu__linkActive : ''}>
				{link.attributes.children.data.length > 0 ? (
					<>
						<Link
							href={link.attributes.url === null || link.attributes.url === "" ? "/#" : link.attributes.url}
							className={`${level > 0 ? styles.menu__subLink__dropdown : styles.menu__subLink}`}
							// onClick={() => toggleSubMenu(link.id)}
						>
							<span>{locale === "en" ? link.attributes.title_en : link.attributes.title}</span>
							<i className={styles.menu__arrow}></i>
						</Link>
						
						
						<ul className={`${submenuClass} ${isSubMenuOpen[link.id] ? styles.menu__subLinkActive : ''}`}>
							{renderLinks(link.attributes.children.data, level + 1)}
						</ul>
					</>
				) : (
					<Link href={link.attributes.url === null || link.attributes.url === "" ? "/#" : link.attributes.url}>
						{locale === "en" ? link.attributes.title_en : link.attributes.title}
					</Link>
				)}
			</li>
		));
	};
	
	
	const renderWithLogo = () => (
		<>
			<ul className={styles.menu__list}>
				{renderLinks(leftLinks.attributes.items.data)}
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
			<ul className={`${styles.menu__list} ${styles.menu__right}`}>
				{renderLinks(rightLinks.attributes.items.data)}
			</ul>
		</>
	);
	
	const renderWithOutLogo = () => (
		<ul className={styles.menu__list}>
			{renderLinks(leftLinks.attributes.items.data)}
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