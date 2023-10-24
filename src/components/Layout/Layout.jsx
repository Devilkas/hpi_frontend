import Header from "@/components/Layout/header/Header";
import Footer from "@/components/Layout/footer/Footer";
import Meta from "@/components/seo/Meta";

const Layout = ({children, title, description, keywords, ogImage, header_items, footer_items}) => {
	
	return (
		<Meta title={title} description={description} keywords={keywords} ogImage={ogImage}>
			<Header headerInfo={header_items}/>
			<main className="main">
				{children}
			</main>
			<Footer footerInfo={footer_items}/>
		</Meta>
	)
}

export default Layout