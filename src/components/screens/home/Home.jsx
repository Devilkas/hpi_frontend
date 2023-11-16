import styles from './Home.module.sass'
import Layout from "@/components/Layout/Layout";
import Slider from "@/components/ui/slider/Slider";
import Section from "@/components/ui/section/Section";

// const Home = ({slides, info, history, events, news, science, header_items, footer_items}) => {
const Home = ({slides, events, news, important_news, header_items, footer_items}) => {
	return (
		<Layout title="Головна сторінка" header_items={header_items}
		        footer_items={footer_items}>
			<div className="container-large">
				<div className="main__row">
					<Slider slides={slides} nav={false} autoplay={true} slideInterval={4000}/>
					<Section category="multiple-columns" content={{important_news: important_news, events: events}}/>
					{/*<Section category="info" title={info.main_title} content={info.items}/>*/}
					{/*<Section category="history" title={history.main_title} content={history.items} links={history.links}/>*/}
					{/*<Section category="events" title={events.main_title} content={events.items}/>*/}
					<Section category="news" title={news.main_title} content={news.items}/>
					{/*<Section category="science" title={science.main_title} content={science.items}/>*/}
				</div>
			</div>
		</Layout>
	)
}

export default Home