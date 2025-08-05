import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { mainMenu } from "data/util";
import Swal from "sweetalert2";


const Header = () => {

  const showComingSoon = () => {
    Swal.fire({
      title: "Coming Soon 🚀",
      text: "This feature will be available soon.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="header fixed top-0 left-0 w-full  z-50 bg-white shadow">

      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Image src="/images/logo_despu.webp" alt="logo" width={50} height={50} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${navOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
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
            {/* {scriptLoaded && ( */}
            <li className="md:hidden">
              <button
                id="open-popup"
                onClick={showComingSoon} 
                className="btn btn-primary z-0 py-[14px]"
              >
                Fill Form
              </button>

            </li>
            {/* )} */}
          </ul>
        </div>

        <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:order-2 md:ml-0 md:flex">
          <button
            id="open-popup"
            onClick={showComingSoon} 
            className="btn btn-primary z-0 py-[14px]"
          >
            Fill Form
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
