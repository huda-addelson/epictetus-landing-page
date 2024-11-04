"use client";
import React from "react";

const Content = ({ tag, title, desc, img, name, position, date }: Content) => {
  return (
    <main>
      <h5 className="text-[#ADB1B7] font-1 z-30">
        <span className="uppercase">{tag}</span> {date}
      </h5>
      <h2 className="font-4 leading-9 text-white my-[10px]">{title}</h2>
      <p className="text-[#ADB1B7] font-2 max-w-[83%] line-clamp-3">{desc}</p>
      <div className="mt-5 flex gap-4 items-center">
        <img
          src={img}
          alt="person"
          className="rounded-full w-[50px] h-[50px] object-cover"
        />
        <div>
          <h4 className="text-white">{name}</h4>
          <p className="text-[#ADB1B7]">{position}</p>
        </div>
      </div>
    </main>
  );
};

export default Content;
