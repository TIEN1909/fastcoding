import React from "react";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <section className="bg-[url('https://fastcoding.jp/sample/html002/img/common/bg_testimonial.jpg')] w-full   bg-center bg-cover bg-no-repeat pt-[75px] pb-[30px]">
   
      <div className="w-full flex justify-center mt-[45px]">
        <p className="block text-center w-[750px]">
          サンプルテキストサンプルテキストサンプルテキストサンプルテ
          キストサンプルテキストサンプルテキストサンプルテキストサン
          プルテキストサンプルテキストサンプルテキストサンプルテキス
          トサンプルテキストサンプルテキストサンプルテキスト
        </p>
      </div>
      <div className="w-full flex justify-center mt-[35px]">
        <Slider />
      </div>
    </section>
  );
};

export default Testimonial;
