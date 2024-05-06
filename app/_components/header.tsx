import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/site-logo.png'

export default function Header() {
  return (
    <header>
      <nav className="absolute w-full z-20 top-0 left-0 ">
        <ul className="flex flex-wrap justify-between items-center relative mx-auto py-4 px-4 md:py-8 md:px-8 ">
          <li className="logo">
            <Link href="#" className="block">
              <Image src={logo} alt="" className="w-24 md:w-32 h-auto" />
            </Link>
          </li>
          <input type="checkbox" id="check" className="hidden" />
          <span className="menu flex justify-center items-center">
            <li className="text-lg ">
              <Link href="#" className="text-center transition duration-200 ease-in-out font-medium text-lg text-white hover:text-gray-100">
                Creon Pass
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="text-center transition duration-200 ease-in-out font-medium text-lg text-white hover:text-gray-100">
                Token
              </Link>
              <span className="soon-label">Soon</span>
            </li>
            <li className="text-lg">
              <Link href="#" className="text-center transition duration-200 ease-in-out font-medium text-lg text-white hover:text-gray-100">
                AI Revenue
              </Link>
              <span className="soon-label">Soon</span>
            </li>
            <li className="text-lg">
              <Link href="#" className="text-center transition duration-200 ease-in-out font-medium text-lg text-white hover:text-gray-100">
                AI Launch Pad
              </Link>
              <span className="soon-label">Soon</span>
            </li>
            <li className='animate-btn'>
              <button className="connect-btn">
              <Link href="#"><span className='button-content'>Connect</span></Link>
              </button>
            </li>
          </span>
          <label htmlFor="check" className="close-menu absolute top-0 right-0 cursor-pointer text-white text-lg font-medium">
            X
          </label>
          <label htmlFor="check" className="open-menu absolute top-1/2 right-4 cursor-pointer text-white text-lg font-medium">
            Menu
          </label>
        </ul>
      </nav>
    </header>
  );
}
