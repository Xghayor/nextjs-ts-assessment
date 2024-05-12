import { monumentRegular } from "../ui/fonts";
import { satoshiBold } from "../ui/fonts";
import { satoshiMedium } from "../ui/fonts";
import { satoshiRegular } from "../ui/fonts";
export default function Profiting() {
	return (
		<section className={`pt-10 md:pt-10 lg:pt-10 2xl:pt-30 2xl:pb-10`}>
			<div className={`site_container mx-auto p-4`}>
				<h2
					className={`${monumentRegular.className} text-white font-bold uppercase text-left text-[22px] sm:text-[38px] md:text-[48px] lg:text-[58px] 2xl:text-[68px] mb-5  profiting-font`}>
					Profiting Through
				</h2>
				<h4
					className={`${monumentRegular.className} text-[13px] sm:text-[18px] md:text-[28px] lg:text-[38px] text-[#A429FF] font-bold uppercase text-right mb-5 md:mb-10 lg:mb-20  sub-profiting-font`}>
					AI Innovation & Decentralization
				</h4>
				<div
					className={`profiting_block_wrap flex flex-col md:flex-col lg:flex-row 2xl:flex-row justify-between gap-5 md:gap-5 items-center`}>
					<div
						className={`profiting_block_video  w-full md:w-full lg:w-[50%] 2xl:w-[67%]  `}>
						<video width="100%" height="100%" poster="" autoPlay loop muted>
							<source src="/videos/creon-logo.mp4" type="video/mp4" />
						</video>
					</div>
					<div
						className={`profiting_block_content text-[22px]  w-full md:w-full lg:w-[45%] 2xl:w-[28%] self-center`}>
						<h5
							className={`${satoshiBold.className} text-[16px] md:text-xl text-white font-bold mb-3 lg:mb-7`}>
							The dynamic community driven business model of the future
						</h5>
						<p
							className={`${satoshiRegular.className} text-sm md:text-sm 2xl:text-lg  text-white font-regular mb-0`}>
							At Creon, we blend the power of AI tools with the dynamic crypto
							and NFT markets, utilizing an innovative business model to drive
							profitability. This approach empowers our community, as our NFT
							and token holders directly benefit from the growth and prosperity
							of the Creon network, creating a win-win scenario for both our
							community and for the projects we launch.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
