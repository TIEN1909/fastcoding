import React from "react";
import { Advantages } from "../../types/type";
import { advantages } from "../../datas/data";
import Image from "next/image";

const Advantages: React.FC<Advantages> = ({ img, ingredient, desc }) => {
  return (
    <section className="bg-[#fbfbfb] px-[215px] pt-[65px] pb-[71px]">
      <span className="block text-center text-[#c5c5c5] text-[14px] font-medium tracking-[0.35px] leading-[19.6px]">
        品質への挑戦
      </span>
      <h2 className="text-center text-[27px] leading-[37.8px] mt-[6px] font-semibold">
        THE ADVANTAGES OF OUR PRODUCTS
      </h2>
      <span className="block mt-[24px] text-center ">---------</span>
      <div className="flex items-center gap-x-[40px]">
        {advantages.map((advantage) => {
          return (
            <div className="w-337px min-h-[263px] flex flex-col justify-center items-center mt-[45px]">
              <div className="w-[147px] h-[65px]">
                <Image
                  src={advantage.img}
                  width={147}
                  height={65}
                  alt={advantage.ingredient}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-[47px] text-[#333333] text-[18px] font-bold tracking-[0.54px] leading-[25.2px]">{advantage.ingredient}</h3>
              <p className="mt-[15px] text-center text-[#707070] text-[14px] font-medium tracking-[0.42px] leading-[23.996px]">{advantage.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Advantages;
