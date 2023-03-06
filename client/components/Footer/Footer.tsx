import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[63px] px-[215px] pb-[60px] flex flex-col justify-center items-center">
      <div className="w-[115px] h-[61px]">
        <Image
          src="https://fastcoding.jp/sample/html002/img/common/logo.png"
          width={115}
          height={61}
          alt="logo"
        />
      </div>
      <div className="flex items-center flex-col mt-[33px]">
        <ul className="flex items-center gap-x-[50px] text-[#707070]">
          <div ></div>
          <li>
            <Link href="/">TOP</Link>
          </li>
          <li>
            <Link href="/">ABOUT</Link>
          </li>
          <li>
            <Link href="/">PRODUCTS</Link>
          </li>
          <li>
            <Link href="/">BLOG</Link>
          </li>
          <li>
            <Link href="/">CONTACT</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">PRIVACY</Link>
          </li>
          <div></div>
        </ul>
        <p className="mt-[30px] text-[#707070] text-[13px] tracking-[0.65px] leading-[18.2px]">
          Copyright (c) EC-CUBE DEMO SHOP.All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
