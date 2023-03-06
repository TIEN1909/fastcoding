import Image from "next/image";
import React from "react";



const Brand = () => {
  return (
    <section className=" mt-[80px] flex items-center justify-between mb-[205px] px-[215px]  w-full">
      <div className="max-w-[390px]">
        <span className="text-[#c5c5c5] font-bold tracking-[0.35px] leading-[19.6px ]">
          オーガニック素材から作られたコスメ
        </span>
        <h2 className="text-[27px] font-medium leading-[37.8px] mt-[6px]">
          NATURAL COSMETIC BRAND
        </h2>
        <p className="text-[#707070] text-[14px] font-medium tracking-[0.42px] leading-[23.996px] mt-[69px] max-w-[370px]">
          サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
        </p>
        <button className="bg-[#333] text-white  leading-[22.4px] py-[16px] px-[68px] flex items-center gap-[10px] mt-[50px]">
          購入はこちら{" "}
        </button>
      </div>
      <div className="w-[700px] h-[430px] relative">
        <Image
          src="https://fastcoding.jp/sample/html002/img/common/img_brand_01.jpg"
          alt="img_brand"
          width={597}
          height={258}
          className="h-full w-full object-cover "
        />
        <Image
          src="https://fastcoding.jp/sample/html002/img/common/img_brand_02.jpg"
          alt="img_brand"
          width={597}
          height={258}
          className="h-[350px] w-[350px] absolute top-[50%] left-[50%] translate-x-[35%]"
        />
      </div>
    </section>
  );
};

export default Brand;
