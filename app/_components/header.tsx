import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/site-logo.png'

const Header = () => {
  return (
    <header className="py-4 px-6 absolute w-full z-10">
      <nav className="flex justify-between items-center">
        <div className="header_logo">
          <Image src={logo} alt="" className="max-w-[140px]" />
        </div>
        <div className="header_links">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                Creon Pass
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                Token
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                AI Revenue
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white font-bold text-lg">
                AI Launch Pad
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white font-bold text-lg border-2 border-white px-4 py-2 rounded-md ml-2"
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;