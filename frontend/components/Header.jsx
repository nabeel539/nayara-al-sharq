"use client";

import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink, scroller } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  { name: "Home", path: "home" },
  { name: "About", path: "about" },
  { name: "Services", path: "services" },
  { name: "Work", path: "work" },
  { name: "Contact", path: "contact" },
];
const Header = () => {
  return (
    <div className="bg-primary py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/* navbar & CTA */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex">
              {links.map((link, index) => (
                <li
                  key={index}
                  className='text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-["/"] after:mx-4 last:after:content-none after:text-yellow'
                >
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    spy={true}
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            {/* CTA */}
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  smooth: true,
                  duration: 500,
                })
              }
              className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1 items-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                Get a quote
              </div>
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>

          {/* navbar mobile */}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
