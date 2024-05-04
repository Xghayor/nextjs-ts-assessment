

const Profiting = () => {
  return (
    <section className="pt-40 pb-40">
      <div className="container mx-auto p-4">
        <h2 className="text-5xl text-white font-bold uppercase mb-5">
          Profiting Through
        </h2>
        <h4 className="text-3xl text-[#A429FF] font-bold uppercase mb-20 text-right">
          AI Innovation & Decentralization
        </h4>
        <div className="profiting_block_wrap flex justify-center items-center">
          <div className="profiting_block_video w-full max-w-md">
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
          <div className="profiting_block_content w-full max-w-md">
            <h5 className="text-xl text-white font-bold mb-7">
              The dynamic community driven business model of the future
            </h5>
            <p className="text-lg text-white font-light mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              mollitia culpa quidem officia quos omnis a autem quam minima in.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              molestias mollitia perferendis animi nihil et molestiae id
              similique tempora necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiting;