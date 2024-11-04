"use client";
import { postItems } from "@/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailPost = () => {
  const [data, setData] = useState<Content | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    function selectData() {
      const filter = postItems.find((item) => item.id === Number(id));
      setData(filter);
    }

    selectData();

    return () => {
      setData(undefined);
    };
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen max-w-screen-xl lg:text-center flex lg:items-center flex-col mt-5 lg:mt-14 mx-auto px-4 lg:px-0">
      <h5 className="text-[#ADB1B7] font-1">
        <span className="uppercase">{data.tag}</span> {data.date}
      </h5>
      <h2 className="font-4 leading-6 lg:leading-9 text-white my-1 lg:my-[10px]">
        {data.title}
      </h2>
      <div className="mt-2 lg:mt-5 flex gap-4 items-center">
        <img
          src={data.img}
          alt="person"
          className="rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] object-cover"
        />
        <div>
          <h4 className="text-white text-sm md:text-base text-start">
            {data.name}
          </h4>
          <p className="text-[#ADB1B7] text-sm md:text-base">{data.position}</p>
        </div>
      </div>
      <div className="h-[250px] lg:h-[450px] w-full lg:w-[80%] flex items-center mt-4 lg:mt-7">
        <img
          src="/images/hero.jpg"
          alt="hero"
          className="w-full object-cover h-full rounded-xl"
        />
      </div>
      <p className="max-w-screen-md text-start text-white text-lg lg:text-xl font-normal mt-5 lg:mt-16">
        Male sixth sea it a. Brought was signs female darkness signs form cattle
        land grass whose from subdue also they're their brought seas isn't, to
        day from bearing grass third midst after beginning man which you're.
        Dry, gathering beginning given made them evening.
        <br />
        <br />
        Lights dry. Thing, likeness, forth shall replenish upon abundantly our
        green. Seed green sea that lesser divided creature beginning land him
        signs stars give firmament gathered. Wherein there their morning a he
        grass. Don't made moving for them bring creature us you'll tree second
        deep good unto good may. Us yielding.
        <br />
        <br />
        Have. Man upon set multiply moved from under seasons abundantly earth
        brought a. They're open moved years saw isn't morning darkness. Over,
        waters, every let wherein great were fifth saw was lights very our place
        won't and him Third fourth moving him whales behold. Beast second stars
        lights great was don't green give subdue his. Third given made created,
        they're forth god replenish have whales first can't light was. Herb
        you'll them beast kind divided. Were beginning fly air multiply god
        Yielding sea don't were forth.
      </p>
    </section>
  );
};

export default DetailPost;
