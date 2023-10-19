import styles from './Home.module.sass'
import Layout from "@/components/Layout/Layout";
// import NewsHomeItems from "@/components/ui/section/news/NewsHomeItems";
import Slider from "@/components/ui/slider/Slider";
import Section from "@/components/ui/section/Section";

const Home = ({slides, info, history, events, news, science}) => {
	return (
		<Layout title="Головна сторінка" description="asd asd" keywords="1,2,3" ogImage="asd">
			<div className="container-large">
				<div className="main__row">
					<Slider slides={slides} nav={false} autoplay={true} slideInterval={4000}/>
					<Section category="info" title={info.main_title} content={info.items}/>
					<Section category="history" title={history.main_title} content={history.items} links={history.links}/>
					<Section category="events" title={events.main_title} content={events.items}/>
					<Section category="news" title={news.main_title} content={news.items}/>
					<Section category="science" title={science.main_title} content={science.items}/>
				</div>
			</div>
		</Layout>
	)
}

export default Home