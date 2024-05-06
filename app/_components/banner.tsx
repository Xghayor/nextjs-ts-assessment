export default function Banner(){
  return (
    <section className="h-screen relative overflow-hidden ">
      <div className="site_container mx-auto p-4 pt-20 md:pt-40  w-full">
        <div className="banner_content pt-xxl md:py-[400px]">
          <h1 className="text-[68px] uppercase text-white mb-6 md:mb-10 heading-font">
            The world's first <br /> platform for tokenizing <br /> AI Blockchain projects
          </h1>
          <h3 className="text-[22px] sub-heading">
            Hold The Creon Pass NFT and earn passive income from AI Tools
          </h3>
        </div>
      </div>
      <div className="back-video absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          id="vid"
          width="100%"
          height="100%"
          poster=""
          autoPlay
          loop
          muted
        >
          <source src="/videos/main-background-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};