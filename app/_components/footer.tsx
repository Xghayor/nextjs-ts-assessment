import Image from "next/image";
import telegram from "../../public/images/Telegram.png";
import discord from "../../public/images/Discord.png";
import twitter from "../../public/images/Twitter.png";
import nft from "../../public/images/nft.png";
import { monumentRegular } from "../ui/fonts";
import { satoshiBold } from "../ui/fonts";
import { satoshiMedium } from "../ui/fonts";
import { satoshiRegular } from "../ui/fonts";
const Footer = () => {
	return (
		<footer className={`relative mt-[-90px] py-10 bg-transparent`}>
			<div className={`site_container`}>
				<div
					className={`footer_wrapper flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center`}>
					<div
						className={`footer_content flex flex-col md:flex-row gap-3 md:gap-10 items-center`}>
						<div className={`copy_right`}>
							<p
								className={`${satoshiMedium.className} text-white font-normal text-[16px]`}>
								© Creon 2023. All rights reserved.
							</p>
						</div>
						<div className={`footer_social flex  gap-4`}>
							<a href="#" className={`mr-4`}>
								<Image src={telegram} alt="" width={34} height={34} />
							</a>
							<a href="#" className={`mr-4`}>
								<Image src={discord} alt="" width={34} height={34} />
							</a>
							<a href="#" className={`mr-4`}>
								<Image src={twitter} alt="" width={34} height={34} />
							</a>
						</div>
					</div>
					<div className={`powered-by flex items-center`}>
						<h6
							className={`text-white font-normal text-sm ${satoshiMedium.className}`}>
							Powered by
						</h6>
						<a className={`inline-block ml-2`} href="#">
							<Image className={`w-[80px]`} src={nft} alt="" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
