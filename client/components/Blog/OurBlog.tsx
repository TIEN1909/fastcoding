import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Blog } from "../../types/type";

const OurBlog: React.FC<Blog> = (props: Blog) => {
  const { image, title, author, category, text, link } = props;
  return (
    <div className="w-[343px] min-h-[559px]">
      <div className="w-[343px] h-[343px]">
        <Image src={image} width={343} height={343} alt={link} />
      </div>
      <h3 className="text-left mt-[23px] text-[#333333] text-[18px] leading-[28.08px] font-bold">
        {title}
      </h3>
      <div className="text-left mt-[17px] ">
        <span className="text-[#707070] text-[14px] leading-[19.6px] font-medium">
          {author} /
        </span>{" "}
        <span className="text-[#f4584b] text-[14px] leading-[19.6px]">
          {category}
        </span>
      </div>
      <span className=" block text-[#707070] text-[14px] leading-[23.996px] font-medium mt-[15px]">
        {text}
      </span>
      <Link
        href="/"
        className="block mt-[20px] text-[#707070] text-[14px] leading-[19.6px] font-medium "
      >
        {link}
      </Link>
    </div>
  );
};

export default OurBlog;
