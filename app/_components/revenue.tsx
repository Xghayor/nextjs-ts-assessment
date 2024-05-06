import Image from 'next/image';
import image1 from '../../public/images/token1.png'
import image2 from '../../public/images/token2.png'
import image3 from '../../public/images/token3.png'

export default function Revenue() {
  return (
    <section className="revenue py-20 pb-40">
      <div className="site_container">
        <div className="revenue_main_wrap flex flex-col md:flex-row justify-between gap-10">
          {[
            {
              title: 'Token',
              subtitle:'The Gateway token to the world of AI',
              description:
                'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
              image: image1
            },
            {
              title: 'Revenue',
              subtitle:'Driving income and growth through decentralization',
              description:
                'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
              image: image2
            },
            {
              title: 'Launchpad',
              subtitle:'Driving the future of AI Innovation',
              description:
                'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
              image:image3
            },
          ].map((item, index) => (
            <div
              key={index}
              className="revenue_block_wrap rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3"
            >
              <div className="title_content py-7 px-7">
                <h2 className="text-6xl font-bold mb-5 uppercase">
                  {item.title}
                </h2>
                <h4 className='item-h4'>{item.subtitle}</h4>
              </div>
              <div className="image_container">
                <div className="image_wrap">
                  <Image
                    src={item.image}
                    alt=""
                    className="image"
                  />
                </div>
              </div>
              <p className=" px-7 pb-7 mt-5 item-desc">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
