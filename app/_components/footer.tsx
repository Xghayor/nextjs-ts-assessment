import Image from 'next/image';
import telegram from '../../public/images/Telegram.png'
import discord from '../../public/images/Discord.png'
import twitter from '../../public/images/Twitter.png'
import nft from '../../public/images/nft.png'

const Footer = () => {
  return (
    <footer className="relative mt-[-90px] py-6 bg-transparent">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8">
        <div className="footer_wrapper flex justify-between items-center">
          <div className="footer_content flex gap-10 items-center">
            <div className="copy_right">
              <p className="text-white font-normal text-sm">
                © Creon 2023. All rights reserved.
              </p>
            </div>
            <div className="footer_social flex gap-4">
              <a href="#" className="mr-4">
                <Image src={telegram} alt="" width={20} height={20} />
              </a>
              <a href="#" className="mr-4">
                <Image src={discord} alt="" width={20} height={20} />
              </a>
              <a href="#" className="mr-4">
                <Image src={twitter} alt="" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="powered-by flex items-center">
            <h6 className="text-white font-normal text-sm">Powered by</h6>
            <a className="inline-block ml-2" href="#">
              <Image src={nft} alt="" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;