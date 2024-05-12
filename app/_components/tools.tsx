import { monumentRegular } from "../ui/fonts";
import { satoshiBold } from "../ui/fonts";
import { satoshiMedium } from "../ui/fonts";
import { satoshiRegular } from "../ui/fonts";
import Image from "next/image";
import tool1 from "../../public/images/tools1.png";
import tool2 from "../../public/images/tools2.png";
import tool3 from "../../public/images/tools3.png";

export default function Tools() {
	return (
		<section className={`tools pb-20 relative`}>
			<div className={`site_container mx-auto`}>
				<div className={`tools_innerwrap`}>
					<div
						className={`tool_block_wrap flex flex-col lg:flex-row  justify-between gap-2 lg:gap-10 mb-5 rounded-lg bg-[#13171D]`}>
						<div
							className={`tool_block_content w-[100%] lg:w-[70%] py-5 lg:py-10 px-5 lg:px-10`}>
							<h2
								className={`${monumentRegular.className} text-white text-[20px] md:text-[30px] xl:text-[34px] 2xl:text-[38px] uppercase font-normal mb-4 leading-normal`}>
								AI Prospects, Market Size, and Development Pace
							</h2>
							<p
								className={`${satoshiMedium.className} text-white text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[18px] font-light`}>
								The AI market is one of the most dynamically growing areas of
								technology. According to reports, the global AI market is
								expected to reach $190.61 billion by 2025, with a CAGR (Compound
								Annual Growth Rate) of 36.6%. The key drivers behind this growth
								include advancements in machine learning, increasing demand for
								big data analytics, and growing adoption of AI technology across
								various sectors such as healthcare, finance, and transportation.
							</p>
						</div>
						<div className={`tool_block_image w-[100%] lg:w-[28%]`}>
							<Image src={tool1} alt="" className={`h-full w-full`} />
						</div>
					</div>
					<div
						className={`tool_block_wrap flex flex-col lg:flex-row  justify-between gap-2 lg:gap-10 mb-5 rounded-lg bg-[#13171D`}>
						<div
							className={`tool_block_content w-[100%] lg:w-[70%]  py-5 lg:py-10 px-5 lg:px-10`}>
							<h2
								className={`${monumentRegular.className} text-white text-[20px] md:text-[30px] xl:text-[34px] uppercase font-normal mb-4 leading-normal`}>
								AI Tools and Market
							</h2>
							<p
								className={`${satoshiMedium.className} text-white text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[18px] font-light`}>
								AI tools refer to the technologies and software that enable
								computer systems to perform tasks usually requiring human
								intellect. The market for these tools is dynamic and diverse,
								encompassing areas such as Natural Language Processing (NLP),
								machine learning, computer vision, and robotics. With a wide
								range of applications, AI tools are becoming increasingly
								indispensable in many sectors, from healthcare to finance,
								retail, manufacturing, and many others.
							</p>
						</div>
						<div className={`tool_block_image w-[100%] lg:w-[28%]`}>
							<Image src={tool2} alt="" className={`h-full w-full`} />
						</div>
					</div>
					<div
						className={`tool_block_wrap flex flex-col lg:flex-row  justify-between gap-2 lg:gap-10 mb-5 rounded-lg bg-[#13171D`}>
						<div
							className={`tool_block_content w-[100%] lg:w-[70%] py-5 lg:py-10 px-5 lg:px-10`}>
							<h2
								className={`${monumentRegular.className} text-white text-[20px] md:text-[30px] xl:text-[34px] uppercase font-normal mb-4 leading-normal`}>
								AI, Crypto, and NFT Market
							</h2>
							<p
								className={`${satoshiMedium.className} text-white text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[18px] font-light`}>
								Artificial Intelligence and blockchain technology are two
								groundbreaking areas leading new technological innovations. The
								combination of these two technologies creates intriguing
								possibilities. For instance, Non-Fungible Tokens (NFTs) can
								leverage AI to create unique digital artworks or to provide
								exclusive AI-based services. Meanwhile, cryptocurrencies can
								benefit from AI by improving security mechanisms, transaction
								efficiency, and service personalization. Such combination brings
								substantial benefits for both developers and users, paving the
								way for unprecedented possibilities.
							</p>
						</div>
						<div className={`tool_block_image w-[100%] lg:w-[28%]`}>
							<Image src={tool3} alt="" className={`h-full w-full`} />
						</div>
					</div>
				</div>
			</div>
			<video
				className={`absolute top-[-10px] w-full h-full z-[-1] inset-0 object-cover opacity-30`}
				width="100%"
				height="100%"
				poster=""
				autoPlay
				loop
				muted>
				<source src="/videos/roadmap-video.mp4" type="video/mp4" />
			</video>
		</section>
	);
}
