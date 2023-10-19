import Header from "@/components/Layout/header/Header";
import Footer from "@/components/Layout/footer/Footer";
import Meta from "@/components/seo/Meta";

const Layout = ({children, title, description, keywords, ogImage}) => {
	return (
		<Meta title={title} description={description} keywords={keywords} ogImage={ogImage}>
			<Header/>
			<main className="main">
				{children}
			</main>
			<Footer/>
		</Meta>
	)
}


export default Layout