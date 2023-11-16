"use client"
import {useEffect} from 'react';
import {useRouter} from "next/router";

const ScrollToTop = () => {
	const {pathname} = useRouter()
	
	useEffect(() => {
		// window.scrollTo({top: 0, behavior: 'smooth'});
		document.querySelector("body").scrollTo(0, 0);
	}, [pathname]);
}

export default ScrollToTop;