import styles from "./ScienceHomeItem.module.sass"
import Link from "next/link";
import Image from "next/image";

const ScienceHomeItems = ({content}) => {
	return (
		<div className={`section__news ${styles.science}`}>
			{/*{content && content.slice(0, 4).map((item, index) => (*/}
			{content && content.map((item, index) => (
				<Link href={`/sciences/${item.id}`} className={`${styles.science__item}`} key={index}>
					<div className={styles.science__img}>
						<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title} width={item.attributes.Image.data.attributes.width} height={item.attributes.Image.data.attributes.height}/>
					</div>
					<div className={styles.science__overlay}>
						<p>{item.attributes.Title}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default ScienceHomeItems