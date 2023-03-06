import React from "react";
import Header from "../Header/Header";
import Keyvisual from "./Keyvisual";

const Slider: React.FC = () => {
  return (
    <div className="bg-[url('https://fastcoding.jp/sample/html002/img/top/bg_keyvisual.jpg')] w-full h-[790px]  bg-center bg-cover bg-no-repeat ">
      <Header/>
      <Keyvisual/>
    </div>
  );
};

export default Slider;
