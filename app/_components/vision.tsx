import visionImage from '../../public/images/vision.png'
import Image from 'next/image';
import Accordions from './accordions';

const Vision = () => {
  return (
    <section className="flex h-screen">
      <div className='site_container flex justify-between '>
        <div className="w-1/2">
          <div className="flex flex-col justify-center h-auto ">
          <h2 className="text-white uppercase text-[38px]  font-bold">our vision is to support the innovation of AI blockchain <br/> while prioritizing communities and democratizing profits</h2>            <Image
              src={visionImage}
              alt="Image description"
            />
          </div>
        </div>
        <div className="w-1/2 h-full">
          <Accordions />
        </div>
      </div>
    </section>
  );
};

export default Vision;