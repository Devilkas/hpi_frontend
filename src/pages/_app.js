import 'normalize.css/normalize.css';
import '@/styles/globals.sass'
import ScrollToTopOnPageChange from "@/components/utils/ScrollToTopOnPageChange";

export default function App({Component, pageProps}) {
	return (
		<>
			<ScrollToTopOnPageChange/>
			<Component {...pageProps} />
		</>
	);
}
