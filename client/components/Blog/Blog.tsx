import React from "react";
import OurBlog from "./OurBlog";
import { blogs } from "../../datas/data";

const Blog = () => {
  return (
    <section className="px-[215px] pt-[75px] pb-[30px]">
      <span className="block text-center text-[#c5c5c5] text-[14px] font-medium tracking-[0.35px] leading-[19.6px]">
        ブログ
      </span>
      <h2 className="text-center text-[27px] leading-[37.8px] mt-[6px] font-semibold">
        FROM OUR BLOG
      </h2>
      <span className="block mt-[24px] text-center ">---------</span>
      <div className="flex items-center gap-x-[30px] mt-[45px]">
        {blogs.map((blog) => {
          return (
            <OurBlog
              image={blog.image}
              title={blog.title}
              author={blog.author}
              category={blog.category}
              text={blog.text}
              link={blog.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
