import Image from 'next/image';
import DarkShape from '../../public/images/Dark-shape.png'
const CreonPass = () => {
  return (
    <section className="py-20">
      <div className="site_container mx-auto p-4">
        <div className="creon_pass_wrap flex justify-center items-center">
          <div className="creon_pass_content_block w-full">
            <h2 className="text-5xl uppercase text-white mb-16">
              Creon Pass NFT
            </h2>
            <h6 className="text-xl text-[#A429FF] mb-16">
              The Creon NFT pass unlocks access to AI projects. The Creon launchpad
              and a ticket to generate passive income through AI-driven tools
            </h6>
            <ul className="flex flex-col gap-6 mb-20">
              <li className="text-xl text-white">Pre-launch investment opportunity for upcoming AI projects</li>
              <li className="text-xl text-white">Free and early access to Creon built AI projects</li>
              <li className="text-xl text-white">Higher allocation limits on the Creon AI Launchpad</li>
              <li className="text-xl text-white">Revenue share distribution from Creon built AI projects</li>
            </ul>
            <div className="creon_pass_btn">
              <a
                href="#"
                className="bg-[#A429FF] text-white px-20 py-4 rounded-md text-lg"
              >
                Buy Creon Pass
              </a>
            </div>
          </div>
          <div className="creon_pass_images relative w-full max-w-md">
            <video
              width="100%"
              height="100%"
              poster=""
              autoPlay
              loop
              muted
            >
              <source src="/videos/nft-video.mp4" type="video/mp4" />
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

export default CreonPass;