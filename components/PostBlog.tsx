import React from "react";

interface Props {
  flexContent?: boolean;
  children: React.ReactNode;
}

const PostBlog = ({ flexContent = false, children }: Props) => {
  const layout = flexContent
    ? "flex flex-col"
    : "grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center";

  return (
    <section className="mt-5 w-full lg:max-w-screen-xl mx-auto z-[999] overflow-hidden px-3">
      <div className={layout}>
        <div
          className={
            flexContent
              ? "h-[250px] w-full"
              : "w-full lg:col-span-8 h-[250px] lg:h-[450px]"
          }
        >
          <img
            src="/images/hero.jpg"
            alt="hero"
            className="w-full object-cover h-full rounded-xl"
          />
        </div>
        <div
          className={
            flexContent
              ? "w-full my-5"
              : "my-3 lg:my-0 lg:col-span-4 w-full lg:max-w-[85%]"
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default PostBlog;
