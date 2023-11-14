import styles from "./Section.module.sass"
import InfoHomeItems from "@/components/ui/section/info/InfoHomeItems";
import HistoryHomeItems from "@/components/ui/section/history/HistoryHomeItems";
import EventHomeItems from "@/components/ui/section/event/EventHomeItems";
import NewsHomeItems from "@/components/ui/section/news/NewsHomeItems";
import ScienceHomeItems from "@/components/ui/section/science/ScienceHomeItems";

const Section = ({category, title, content, description = "", links = ""}) => {
	return (
		<section className={styles.section} id={category}>
			<div className={styles.section__title}>
				<h2>{title}</h2>
			</div>
			{category === "info" ?
				<InfoHomeItems className={`section__items`} category={category} description={description}
				               content={content}/> : ""}
			{category === "history" ?
				<HistoryHomeItems className={`section__items`} category={category} content={content} links={links}/> : ""}
			{category === "events" ?
				<EventHomeItems className={`section__items`} category={category} content={content}/> : ""}
			{category === "news" ?
				<NewsHomeItems className={`section__items`} isHomePage={true} category={category} content={content}/> : ""}
			{category === "science" ?
				<ScienceHomeItems className={`section__items`} category={category} content={content}/> : ""}
		</section>
	)
}

export default Section