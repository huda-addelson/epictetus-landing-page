"use client";
import useScroll from "@/hooks/useScroll";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

type navItems = {
  title: string;
  to: string;
};

const Header = () => {
  const { y } = useScroll();

  const items: navItems[] = [
    {
      title: "UI Design",
      to: "/",
    },
    {
      title: "Front-end",
      to: "/",
    },
    {
      title: "Back-end",
      to: "/",
    },
    {
      title: "Lainnya",
      to: "/",
    },
  ];

  return (
    <section
      className={`w-full sticky top-0 ${
        y > 100 && "backdrop-blur-3xl"
      } z-[999]`}
    >
      {/* For Web */}
      <header
        className={`transition-all duration-300  justify-between items-center max-w-screen-xl mx-auto hidden lg:flex ${
          y > 100 ? "py-5" : "py-8"
        }`}
      >
        <div className="flex items-center gap-24">
          <div className="text-white font-3">
            <span className="py-[6px] px-3 mr-3 bg-[#4B5563]">E</span>Epictetus
          </div>
          <nav className="text-white font-2 gap-11 flex">
            {items.map((items, idx) => (
              <Link href={items.to} key={idx}>
                {items.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="min-w-56 relative">
          <i className="font-2 ri-search-2-line absolute top-[20%] left-[7%] z-50 text-white"></i>
          <Input
            placeholder="Search"
            className="bg-[#283241] pl-10 pr-3 py-3 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-slate-900"
          />
        </div>
      </header>
      {/* For Mobile */}
      <header className="flex justify-between items-center py-4 px-3 md:hidden">
        <i className="ri-menu-line text-white text-2xl"></i>
        <div className="text-white font-3">
          <span className="py-[6px] px-3 mr-3 bg-[#4B5563]">E</span>Epictetus
        </div>
        <i className="ri-search-line text-white text-2xl"></i>
      </header>
    </section>
  );
};

export default Header;
