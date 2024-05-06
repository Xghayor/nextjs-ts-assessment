export default function Profiting() {
  return (
    <section className="pt-40 pb-40">
      <div className="site_container mx-auto p-4 w-full">
        <h2 className="text-white font-bold uppercase text-left text-[68px] mb-5 profiting-font">
          Profiting Through
        </h2>
        <h4 className="text-[38px]  text-[#A429FF] font-bold uppercase text-right mb-20 -mt-10 sub-profiting-font">
          AI Innovation & Decentralization
        </h4>
        <div className="profiting_block_wrap flex  items-center">
          <div className="profiting_block_video  w-[947px] h-[485px] pr-20 self-start">
            <video
              width="100%"
              height="100%"
              poster=""
              autoPlay
              loop
              muted
            >
              <source src="/videos/creon-logo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="profiting_block_content w-full max-w-md md:w-[397px] md:h-[270px] self-center">
            <h5 className="text-xl text-white font-bold mb-7">
              The dynamic community driven business model of the future
            </h5>
            <p className="text-lg text-white font-satoshi font-regular leading-1.3 mb-0">
            At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}