import Social from "@components/Social";
import social from "@config/social.json";
import { mainMenu } from "data/util";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <footer className="bg-white text-black py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Image src="/images/logo_despu.webp" alt="logo" width={50} height={50}/>
        </div>

        {/* Menu */}
        <ul className="lg:flex hidden  flex-row gap-4 text-sm">
          {mainMenu?.map((menu, i) => (
            menu.url && (
              <li className="nav-item" key={`menu-${i}`}>
                <Link
                  href={menu.url}
                  onClick={() => setNavOpen(false)}
                  className={`nav-link block ${router.asPath === menu.url ? "nav-link-active" : ""
                    }`}
                >
                  {menu.name}
                </Link>
              </li>
            )
          ))}
        </ul>
         <Social source={social} className="flex justify-center gap-4 text-2xl" />

        <div className="text-sm text-center  md:text-right">
          © {new Date().getFullYear()} DESPU. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

