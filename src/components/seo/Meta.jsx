import Head from "next/head";

const Meta = ({title, description, keywords, ogImage, children}) => {
	const getTitle = (title) => {
		const baseTitle = 'Національний технічний університет «Харківський політехнічний iнститут»';
		return title ? `${title} | ${baseTitle}` : baseTitle;
	};
	return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				<meta name="author" content="Kushnerov Oleksandr"/>
				<meta property="og:title" content={getTitle(title)}/>
				{keywords ?
					<>
						<meta name="keywords" content={keywords}/>
					</>
					:
					<>
						<meta name="keywords"
						      content="Національний технічний університет «Харківський політехнічний iнститут», ХПІ"/>
					</>
				}
				{description ?
					<>
						<meta name="description" content={description}/>
						<meta property="og:description" content={description}/>
					</>
					:
					<>
						<meta name="description" content="Національний технічний університет «Харківський політехнічний iнститут»"/>
						<meta property="og:description"
						      content="Національний технічний університет «Харківський політехнічний iнститут»"/>
					</>
				}
				{ogImage ?
					<meta property="og:image" content={ogImage}/>
					:
					<meta property="og:image" content="/logo.png"/>
				}
			
			</Head>
			<div className="wrapper">
				{children}
			</div>
		</>
	)
}

export default Meta