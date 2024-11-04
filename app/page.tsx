"use client";
import PostBlog from "@/components/PostBlog";
import Content from "@/components/Content";
import React, { useState } from "react";
import { postItems } from "@/data";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Post */}
      <div onClick={() => handleClick(1)}>
        <PostBlog>
          <Content
            id={1}
            tag="ui design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            desc="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            img="/images/person.png"
            name="Leslie Alexander"
            position="UI Designer"
          />
        </PostBlog>
      </div>
      {/* Grid Post */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 mt-6 lg:mt-14">
        {postItems.map((item, idx) => (
          <div
            className="col-span-4 cursor-pointer relative group p-1 h-full w-full"
            key={idx}
            onClick={() => handleClick(item.id)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-900 dark:bg-slate-800/[0.8] rounded-3xl z-0"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10 pointer-events-auto">
              <PostBlog flexContent>
                <Content
                  id={item.id}
                  tag={item.tag}
                  date={item.date}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  name={item.name}
                  position={item.position}
                />
              </PostBlog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
