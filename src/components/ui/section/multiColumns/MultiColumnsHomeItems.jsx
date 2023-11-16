import styles from "./MultiColumnsHomeItems.module.sass"
import Link from "next/link";
import Image from "next/image";

const MultiColumnsHomeItems = ({content}) => {
	// const formatDate = (dateString) => {
	// 	const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
	// 	const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
	// 	return formattedDate.replace(/\//g, '.');
	// };
	// let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis fugiat magnam natus, suscipit totam voluptates! Accusantium ad aliquam assumenda at corporis cumque dicta doloremque dolores excepturi facilis laborum neque nihil numquam odit omnis perferendis placeat provident quia quod recusandae repellat repudiandae, sint suscipit tempora unde veritatis voluptate voluptates! Ab accusantium ad adipisci assumenda atque dicta ea earum ex exercitationem in ipsam ipsum iusto molestias nam nihil omnis pariatur quaerat quam quibusdam quod quos, repellendus, reprehenderit sint sit suscipit ullam vitae. Earum id illo ipsam officia reprehenderit repudiandae voluptate voluptatem. Ab ad alias animi asperiores aspernatur at culpa distinctio doloremque est facere facilis id in ipsa itaque iure labore natus optio perferendis quis quos ratione, recusandae repudiandae sit soluta veniam voluptate, voluptatibus. Ab, animi atque dignissimos error ex expedita harum nobis quasi voluptatem voluptates? Ab accusantium cupiditate dolorem error placeat quisquam quod, ratione ullam. Asperiores distinctio eius facilis rerum totam! Aliquam aspernatur at, beatae cum deleniti dignissimos earum fugiat incidunt nesciunt nulla qui, quos reiciendis repudiandae similique veritatis. Accusamus aperiam corporis cupiditate deleniti, dolorem doloremque dolorum ducimus ea eos error et expedita illum inventore laborum laudantium minima nam nihil nobis pariatur, quibusdam quis quisquam sapiente soluta tempora ullam veritatis voluptate. Adipisci alias aliquam consectetur delectus hic illum labore, maiores minima nobis numquam odio officiis pariatur quas quod quos similique sint tempore velit vitae voluptatibus. Accusantium aliquid amet aspernatur, at culpa cum deserunt dicta dignissimos distinctio dolore ea eos est eveniet explicabo, magnam minima, molestiae neque nihil optio praesentium qui sequi tenetur ullam ut vitae. Et explicabo neque, quia rerum sapiente veniam! At dolor facere id impedit ipsa ipsum itaque labore laboriosam magnam, neque nobis perspiciatis praesentium quo quod quos reiciendis rem repellendus saepe temporibus voluptates. Adipisci aliquid at corporis dolor doloribus ea earum eos eum explicabo fuga fugit harum iusto maiores minima nesciunt nobis obcaecati officiis pariatur perspiciatis placeat quas quasi saepe sequi suscipit ut, voluptate voluptatibus. A ad consectetur cum eligendi iure, labore nemo. Accusantium adipisci animi consectetur cupiditate dolores doloribus ducimus eum expedita fugiat harum laboriosam, maiores minus molestias nam nesciunt, nobis nulla officia placeat possimus quae quam quibusdam sequi tenetur totam, ullam vero voluptas? Architecto aut corporis debitis deserunt est explicabo facere ipsam molestiae natus nemo nesciunt, nostrum numquam odio perferendis placeat quod repellendus sunt? Accusantium alias aperiam, asperiores aspernatur assumenda commodi consectetur delectus dolorem ea excepturi impedit ipsam ipsum libero magnam magni, nam nobis numquam pariatur quam reprehenderit sint soluta, voluptatem voluptatum. Animi at aut delectus deserunt dolores ea facere hic illo ratione voluptate? Beatae culpa ea eligendi exercitationem explicabo labore magnam maxime minima molestiae mollitia nam, neque quae quasi qui quidem tempora voluptas voluptatum! Aliquid atque delectus labore magnam nobis. Distinctio dolorum nam vel. Beatae deleniti doloremque dolores, explicabo impedit ipsa nam necessitatibus nisi, odio quam qui reiciendis rem sapiente ut vitae! Accusamus adipisci alias aliquam architecto aspernatur assumenda at autem beatae blanditiis commodi distinctio ea et eum eveniet fugiat id illum incidunt inventore iusto maiores mollitia nobis odio possimus praesentium quam quos reiciendis soluta tempora unde vel veniam veritatis vero, voluptatum. Ab accusamus cum, dolorum est minima nemo, officia perferendis quidem sint tempora veritatis voluptatibus! Beatae debitis dolore enim ex fugiat fugit, molestiae mollitia obcaecati quia quod, recusandae, reiciendis sit suscipit? Autem dignissimos eaque iure placeat reiciendis repellat reprehenderit soluta. Illum molestias quas voluptatibus. Accusamus id illo ipsa laudantium magni mollitia optio, quaerat quam saepe tenetur! Dignissimos eaque illo magnam nobis numquam officiis similique. A consequuntur cumque, earum facilis laudantium minima neque nisi nostrum quae sit. Animi asperiores atque corporis cum, cupiditate ducimus eaque eos, excepturi iste itaque minus molestias nobis non obcaecati officia pariatur porro praesentium quia quibusdam saepe suscipit vero voluptas voluptate! Beatae debitis, ea eius inventore placeat suscipit vero voluptatum. Dolorem incidunt praesentium soluta ullam! Consectetur culpa delectus numquam praesentium quod. Consectetur enim illo illum nesciunt nulla, qui quo soluta unde. Asperiores beatae dolore incidunt rerum. Amet beatae consectetur deleniti ducimus est, excepturi magnam, magni minus natus nisi odio odit omnis quos rem repellat sequi vero. Adipisci aliquam aut consequuntur cum eum illo illum laborum laudantium libero magni minus numquam obcaecati reprehenderit tempora, temporibus velit vero. Accusantium cupiditate dolor, est excepturi ipsum iste laudantium maxime modi optio quam quas qui tempora?"
	return (
		<div className={`section__events ${styles.multiColumns}`}>
			{content.important_news &&
				<div className={`${styles.multiColumns__items}`}>
					<div className={styles.multiColumns__title}>
						<h2>{content.important_news.main_title}</h2>
					</div>
					<div className={styles.multiColumns__news}>
						{content.important_news.items.slice(0, 2).map((item, index) => (
							<Link href={`/news/${item.attributes.seo_url}`} className={`${styles.multiColumns__item}`} key={index}>
								<div className={styles.multiColumns__img}>
									<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title}
									       width={item.attributes.Image.data.attributes.width}
									       height={item.attributes.Image.data.attributes.height}/>
								</div>
								<div className={styles.multiColumns__content}>
									<div className={styles.multiColumns__title}>
										<h4>{item.attributes.Title}</h4>
									</div>
									<div className={styles.multiColumns__description}>
										{item.attributes.short_description.split(" ").length > 40 ?
											<p>{item.attributes.short_description.split(" ").slice(0, 40).join(" ") + "..."}</p>
											:
											<p>{item.attributes.short_description}</p>
										}
										{/*{text.split(" ").length > 40 ?*/}
										{/*	<p>{text.split(" ").slice(0, 40).join(" ") + "..."}</p>*/}
										{/*	:*/}
										{/*	<p>{text}</p>*/}
										{/*}*/}
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			}
			{content.events &&
				<div className={`${styles.multiColumns__items}`}>
					<div className={styles.multiColumns__title}>
						<h2>{content.events.main_title}</h2>
						<Link href={`/events`} className={styles.multiColumns__titleLink}>
							<h2>Більше подій →</h2>
						</Link>
					</div>
					<div className={styles.multiColumns__events}>
						{content.events.items.slice(0, 3).map((item, index) => (
							<Link href={`/events/${item.attributes.seo_url}`} className={`${styles.multiColumns__item}`} key={index}>
								<div className={styles.multiColumns__img}>
									<Image src={item.attributes.Image.data.attributes.url} alt={item.attributes.Title}
									       width={item.attributes.Image.data.attributes.width}
									       height={item.attributes.Image.data.attributes.height}/>
								</div>
								<div className={styles.multiColumns__content}>
									<div className={styles.multiColumns__title}>
										<h4>{item.attributes.Title}</h4>
									</div>
									
									<div className={styles.multiColumns__description}>
										{item.attributes.short_description.split(" ").length > 30 ?
											<p>{item.attributes.short_description.split(" ").slice(0, 30).join(" ") + "..."}</p>
											:
											<p>{item.attributes.short_description}</p>
										}
										{/*{text.split(" ").length > 30 ?*/}
										{/*	<p>{text.split(" ").slice(0, 30).join(" ") + "..."}</p>*/}
										{/*	:*/}
										{/*	<p>{text}</p>*/}
										{/*}*/}
									</div>
								</div>
							</Link>
						))}
					</div>
					<div className={styles.multiColumns__links}>
						<Link href="/events">Більше подій →</Link>
					</div>
				</div>
			}
		</div>
	)
}

export default MultiColumnsHomeItems