"use client";
import {
	monumentRegular,
	satoshiBold,
	satoshiMedium,
	satoshiRegular,
} from "../ui/fonts";
import Image from "next/image";
import { useState } from "react";
import proon from "../../public/images/profiton.png";
import prooff from "../../public/images/profitoff.png";
const Accordion = () => {
	const [selected, setSelected] = useState(1);
	return (
		<div className={`grid gap-8`}>
			{/* Column 1 */}
			<div className={`max-w-full mx-auto `}>
				<ul className={`shadow-box flex flex-col gap-10`}>
					<li className={`relative`}>
						<div className={`image-container`}>
							{selected === 1 ? (
								<Image
									src={proon}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							) : (
								<Image
									src={prooff}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							)}
						</div>
						<button
							type="button"
							className={`w-full px-6 py-6 text-left`}
							onClick={() => setSelected(selected !== 1 ? 1 : null)}>
							<div
								className={`${satoshiBold.className} flex items-center justify-between text-[22px]`}>
								<span>
									Profitability and <br /> Growth
								</span>
								<svg
									style={{
										transform:
											selected === 1 ? "rotate(180deg)" : "rotate(0deg)",
										transition: "transform 0.3s ease-in-out",
									}}
									className={`w-5 h-5 text-gray-500`}
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path d="M19 9l-7 7-7-7"></path>
								</svg>
							</div>
						</button>
						<div
							className={`relative overflow-hidden transition-all max-h-0 duration-700`}
							style={{
								maxHeight: selected === 1 ? "200px" : "0px",
							}}>
							<div className={`px-6 pb-6`}>
								<p className={`${satoshiRegular.className} text-lg`}>
									At Creon, we handpick cutting-edge AI projects and offer our
									community and token holders early access and investment
									opportunities. Our community actively contributes to the
									growth and profitability of these projects, creating a dynamic
									ecosystem of innovation and shared success.
								</p>
							</div>
						</div>
					</li>
					<li className={`relative`}>
						<div className={`image-container`}>
							{selected === 2 ? (
								<Image
									src={proon}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							) : (
								<Image
									src={prooff}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							)}
						</div>
						<button
							type="button"
							className={`w-full px-6 py-6 text-left`}
							onClick={() => setSelected(selected !== 2 ? 2 : null)}>
							<div
								className={`${satoshiBold.className} flex items-center justify-between text-[22px]`}>
								<span>
									Profitability and <br /> Growth
								</span>
								<svg
									style={{
										transform:
											selected === 2 ? "rotate(180deg)" : "rotate(0deg)",
										transition: "transform 0.3s ease-in-out",
									}}
									className={`w-5 h-5 text-gray-500`}
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path d="M19 9l-7 7-7-7"></path>
								</svg>
							</div>
						</button>
						<div
							className={`relative overflow-hidden transition-all max-h-0 duration-700`}
							style={{
								maxHeight: selected === 2 ? "200px" : "0px",
							}}>
							<div className={`px-6 pb-6`}>
								<p className={`${satoshiRegular.className} text-lg`}>
									At Creon, we handpick cutting-edge AI projects and offer our
									community and token holders early access and investment
									opportunities. Our community actively contributes to the
									growth and profitability of these projects, creating a dynamic
									ecosystem of innovation and shared success.
								</p>
							</div>
						</div>
					</li>
					<li className={`relative`}>
						<div className={`image-container`}>
							{selected === 3 ? (
								<Image
									src={proon}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							) : (
								<Image
									src={prooff}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							)}
						</div>
						<button
							type="button"
							className={`w-full px-6 py-6 text-left`}
							onClick={() => setSelected(selected !== 3 ? 3 : null)}>
							<div
								className={`${satoshiBold.className} flex items-center justify-between text-[22px]`}>
								<span>
									Profitability and <br /> Growth
								</span>
								<svg
									style={{
										transform:
											selected === 3 ? "rotate(180deg)" : "rotate(0deg)",
										transition: "transform 0.3s ease-in-out",
									}}
									className={`w-5 h-5 text-gray-500`}
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path d="M19 9l-7 7-7-7"></path>
								</svg>
							</div>
						</button>
						<div
							className={`relative overflow-hidden transition-all max-h-0 duration-700`}
							style={{
								maxHeight: selected === 3 ? "200px" : "0px",
							}}>
							<div className={`px-6 pb-6`}>
								<p className={`${satoshiRegular.className} text-lg`}>
									At Creon, we handpick cutting-edge AI projects and offer our
									community and token holders early access and investment
									opportunities. Our community actively contributes to the
									growth and profitability of these projects, creating a dynamic
									ecosystem of innovation and shared success.
								</p>
							</div>
						</div>
					</li>
					<li className={`relative`}>
						<div className={`image-container`}>
							{selected === 4 ? (
								<Image
									src={proon}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							) : (
								<Image
									src={prooff}
									alt="Image"
									className={`w-50 h-50`}
									style={{
										position: "absolute",
										top: 0,
										left: -120,
									}}
								/>
							)}
						</div>
						<button
							type="button"
							className={`w-full px-6 py-6 text-left`}
							onClick={() => setSelected(selected !== 4 ? 4 : null)}>
							<div
								className={`${satoshiBold.className} flex items-center justify-between text-[22px]`}>
								<span>
									Profitability and <br /> Growth
								</span>
								<svg
									style={{
										transform:
											selected === 4 ? "rotate(180deg)" : "rotate(0deg)",
										transition: "transform 0.3s ease-in-out",
									}}
									className={`w-5 h-5 text-gray-500`}
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor">
									<path d="M19 9l-7 7-7-7"></path>
								</svg>
							</div>
						</button>
						<div
							className={`relative overflow-hidden transition-all max-h-0 duration-700`}
							style={{
								maxHeight: selected === 4 ? "200px" : "0px",
							}}>
							<div className={`px-6 pb-6`}>
								<p className={`${satoshiRegular.className} text-lg`}>
									At Creon, we handpick cutting-edge AI projects and offer our
									community and token holders early access and investment
									opportunities. Our community actively contributes to the
									growth and profitability of these projects, creating a dynamic
									ecosystem of innovation and shared success.
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Accordion;
