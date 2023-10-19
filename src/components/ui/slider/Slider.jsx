import styles from './Slider.module.sass';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const Slider = ({
	                slides,
	                dots = true,
	                nav = true,
	                autoplay = false,
	                slideInterval = 3000,
	                prevButtonContent = '&lt;', // Default content for previous button (you can change this)
	                nextButtonContent = '&gt;', // Default content for next button (you can change this)
                }) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [autoplayPaused, setAutoplayPaused] = useState(false);
	const handleNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
	};
	
	const handlePrevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
	};
	
	const handleDotClick = (index) => {
		setCurrentSlide(index);
	};
	
	const handleSlideMouseEnter = () => {
		if (autoplay) {
			setAutoplayPaused(true);
		}
	};
	
	const handleSlideMouseLeave = () => {
		if (autoplay) {
			setAutoplayPaused(false);
		}
	};
	
	useEffect(() => {
		let interval;
		if (autoplay && !autoplayPaused) {
			interval = setInterval(() => {
				setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
			}, slideInterval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [autoplay, slideInterval, autoplayPaused]);
	return (
		<div className={styles.slider}>
			<div className={styles.slidesContainer}>
				{slides && slides.map((slide, index) => (
					<div
						key={index}
						className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
					>
						<Image src={slide.Image.data.attributes.url} alt={slide.Title} width={slide.Image.data.attributes.width} height={slide.Image.data.attributes.height}/>
						{slide.button_url && (
							<div className={styles.slideContent}>
								<h3>{slide.Title}</h3>
								<Link href={slide.button_url} target={slide.button_target} onMouseEnter={handleSlideMouseEnter} onMouseLeave={handleSlideMouseLeave}>
									{slide.Button_text}
								</Link>
							</div>
						)}
					</div>
				))}
			</div>
			{dots ? (
				<div className={styles.dotsContainer}>
					<div className={styles.dots}>
						{slides && slides.map((_, index) => (
							<div
								key={index}
								className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
								onClick={() => handleDotClick(index)}
							></div>
						))}
					</div>
				</div>
			) : (
				''
			)}
			{nav ? (
				<>
					<button className={`${styles.arrow} ${styles['arrow-prev']}`} onClick={handlePrevSlide}>
						{prevButtonContent}
					</button>
					<button className={`${styles.arrow} ${styles['arrow-next']}`} onClick={handleNextSlide}>
						{nextButtonContent}
					</button>
				</>
			) : (
				''
			)}
		</div>
	);
};

export default Slider;
