import Image from "next/image";
import React from "react";
import { Props } from "../../types/type";
const Seller = (props: Props) => {
  const { datas } = props;
  return (
    <section className="bg-[url('https://fastcoding.jp/sample/html002/img/top/bg_best_seller.png')] w-full h-[861px]  bg-center bg-cover bg-no-repeat ">
      <div className="px-[203px] py-[67px] ">
        <span className="text-[#c5c5c5] text-[14px] font-bold tracking-[0.35px] leading-[19.6px] text-center block">
          おすすめの商品
        </span>
        <h2 className="text-center mt-[6px] text-[27px] leading-[37.8px] font-medium">
          BEST SELLER
        </h2>
        <span className=" block text-center mt-[24px] text-[#c5c5c5]">
          -------------
        </span>
        <div className=" flex justify-center items-center gap-x-[40px]">
          {datas.map((data) => {
            return (
              <div className="mt-[45px] ">
                <div className="w-[331px] h-[387px] px-[54px]">
                  <Image
                    src={data.image}
                    alt="img_brand"
                    width={597}
                    height={258}
                    className="h-full w-full object-cover "
                  />
                </div>
                <h3 className="text-center mt-[35px] text-[#f4584b] text-[14px] leading-[19.6px]">
                  {data.face}
                </h3>
                <p className="text-center mt-[5px] text-[#707070] leading-[22.4px] font-medium">
                  {data.name}
                </p>
                <span className=" block text-center mt-[3px] text-[#333333] leading-[22.4px] font-medium">
                  ¥{data.price}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-full  flex items-center justify-center">
          <button className="bg-[#333] text-white text-[14px] leading-[22.4px] py-[14px] px-[36px]  gap-[10px] mt-[50px]">
            すべての商品を見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default Seller;
