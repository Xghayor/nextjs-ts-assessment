import { monumentRegular } from "../ui/fonts";
import { satoshiBold } from "../ui/fonts";
import { satoshiMedium } from "../ui/fonts";
import { satoshiRegular } from "../ui/fonts";
import Image from "next/image";
import image1 from "../../public/images/token1.png";
import image2 from "../../public/images/token2.png";
import image3 from "../../public/images/token3.png";

export default function Revenue() {
	return (
		<section className="revenue py-20 pb-40">
			<div className="site_container">
				<div
					className={`revenue_main_wrap flex justify-center gap-10 md:gap-10 flex-wrap`}>
					{[
						{
							title: "Token",
							subtitle: "The Gateway token to the world of AI",
							description:
								"Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
							image: image1,
						},
						{
							title: "Revenue",
							subtitle: "Driving income and growth through decentralization",
							description:
								"CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
							image: image2,
						},
						{
							title: "Launchpad",
							subtitle: "Driving the future of AI Innovation",
							description:
								"The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
							image: image3,
						},
					].map((item, index) => (
						<div
							key={index}
							className={`revenue_block_wrap rounded-lg overflow-hidden w-full md:w-[45%] xl:w-[30%] `}>
							<div className={`title_content py-7 px-7`}>
								<h2
									className={`${monumentRegular.className} text-2xl lg:text-[28px] xl:text-[38px] text-white text-left font-bold mb-5 uppercase }`}>
									{item.title}
								</h2>
								<h4
									className={`${satoshiBold.className} text-[15px] md:text-[16px] xl:text-[18px] text-blue-800 text-left  mb-0 md:mb-5 lg:mb-10 h-10`}>
									{item.subtitle}
								</h4>
							</div>
							<div className="image_container">
								<div className={`overflow-hidden mr-6 `}>
									<Image
										src={item.image}
										alt=""
										className={`transform hover:scale-110 transition-all duration-300 ease-in-out `}
									/>
								</div>
							</div>
							<p
								className={`${satoshiMedium.className} text-white text-[15px] md:text-[16px] lg:text-[17px] xltext-[18px] px-7 font-light py-7`}>
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
