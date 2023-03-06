import React from "react";
import { communitys } from "@/datas/data";
import { Community } from "@/types/type";
import Image from "next/image";
const Community: React.FC<Community> = () => {
  return (
    <section className="pt-[15px]">
      <span className="block text-center text-[#c5c5c5] text-[14px] font-medium tracking-[0.35px] leading-[19.6px]">
        お客様の声
      </span>
      <h2 className="text-center text-[27px] leading-[37.8px] mt-[6px] font-semibold">
        OUR TESTIMONIAL
      </h2>
      <span className="block mt-[24px] text-center ">---------</span>
      <div className="w-full flex justify-center mt-[45px]">
        <p className="block text-center w-[750px]">
          サンプルテキストサンプルテキストサンプルテキストサンプルテキス
          トサンプルテキストサンプルテキストサンプルテキストサンプルテキ
          ストサンプルテキストサンプルテキスト
        </p>
      </div>
      <div className="flex items-center justify-center mt-[54px]">
        {communitys.map((community) => {
          return (
            <div className="w-[304px] h-[304px]">
              <Image src={community.image} width={304} height={304} alt={community.image} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Community;
