import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="mt-[80px]  px-[215px] pb-20 flex justify-between items-start gap-x-[203px] ">
      <div>
        <span className="text-[#c5c5c5] text-[14px] font-bold tracking-[0.35px] leading-[19.6px] text-center block">
          明日へ輝くあなたへ
        </span>
        <h2 className="text-center mt-[6px] text-[27px] leading-[37.8px] font-medium">
          LET US GUIDE YOU TO YOUR MOST RADIANT SELF
        </h2>
        <span className=" block text-center mt-[8px] text-[#c5c5c5]">
          -------------
        </span>
        <div className="w-[372px] h-[244px] relative mt-[45px]">
          <Image
            src="https://fastcoding.jp/sample/html002/img/common/img_guide_01.jpg"
            alt="img_brand"
            width={597}
            height={258}
            className="h-full w-full object-cover "
          />
          <Image
            src="https://fastcoding.jp/sample/html002/img/common/img_guide_02.jpg"
            alt="img_brand"
            width={300}
            height={400}
            className="h-[400px] w-[300px] absolute top-[51.1%] left-[29.1%] translate-x-[35%]"
          />
        </div>
      </div>
      <div>
        <div className="w-[515px] h-[357px]">
          <Image
            src="https://fastcoding.jp/sample/html002/img/common/img_guide_03.jpg"
            alt="img_brand"
            width={515}
            height={357}
            className="h-full w-full object-cover "
          />
        </div>
        <div className=" px-[30px] mt-[55px]">
          <span className="block text-[14px] text-[#707070] font-medium tracking-[0.42px] leading-[23.996px]">
            サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
          </span>
          <span className="mt-[27px] block text-[14px] text-[#707070] font-medium tracking-[0.42px] leading-[23.996px]">
            サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
          </span>
          <button className="bg-[#333] text-white  leading-[22.4px] py-[14px] px-[68px] flex items-center gap-[10px] mt-[68px]">
            購入はこちら{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Guide;
