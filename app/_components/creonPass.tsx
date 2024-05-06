import Image from 'next/image';
import DarkShape from '../../public/images/Dark-shape.png'
import Link from 'next/link';

export default function CreonPass() {
  return (
    <section className="creonpass pt-20 pb-20 flex flex-col">
      <div className="site_container w-full">
        <div className="creon_pass_wrap flex justify-evenly items-center">
          <div className="creon_pass_content_block w-full max-w-2xl">
            <h2 className="text-[68px] text-white uppercase mb-16 custom-font">
              Creon Pass <br /> NFT
            </h2>
            <h6 className="text-xl text-[#a429ff] mb-16 sub-custom-font">
              The Creon NFT pass unlocks access to AI projects. The Creon
              <br /> launchpad and a ticket to generate passive income through AI-
              <br /> driven tools
            </h6>
            <ul className="flex flex-col gap-6 mb-20 text-xl text-white creon-li">
              <li>Pre-launch investment opportunity for upcoming AI projects</li>
              <li>Free and early access to Creon built AI projects</li>
              <li>Higher allocation limits on the Creon AI Launchpad</li>
              <li>Revenue share distribution from Creon built AI projects</li>
            </ul>
            <div className="creon_pass_btn">
                  <Link href="#" className="creon-btn bg-[#a429ff] text-white py-4 px-20 rounded-md">
                Buy Creon Pass
                </Link>
              </div>
          </div>
          <div className="creon_pass_images relative w-full max-w-2xl">
            <video
              width="100%"
              height="100%"
              poster=""
              autoPlay
              loop
              muted
            >
              <source src="images/nft-video.mp4" type="video/mp4" />
            </video>
            <Image
              src={DarkShape}
              alt=""
              className="absolute top-0 left-0 w-full h-full dark_bg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};