import Image from "next/image";
import React from "react";
import {AiOutlineDoubleRight} from 'react-icons/ai'

const Keyvisual = () => {
  return (
    <div className="w-[597px] h-[284px] mt-[120px] ml-[155px] relative ">
      <Image
        src="https://fastcoding.jp/sample/html002/img/top/ttl_keyvisual.png"
        alt="keyvisual"
        width={597}
        height={258}
        className="h-full w-full object-cover leading-[19.6px] z-[-999px]"
      />
      <div>
        <h2 className=" absolute top-[57%] left-[48%] translate-x-[-50%] translate-y-[-50%] text-[72px] font-medium text-[#333333] leading-[72px] tracking-[7.2px]">
          COSMETICS
        </h2>
        <span className="w-full text-center absolute left-[50%] bottom-[20%] translate-x-[-50%] translate-y-[-50%] text-[20px] font-medium text-[#333333] leading-[20px] tracking-[5px]">オーガニック素材だけを使ったコスメ</span>
        <button className="bg-[#333] text-white absolute left-[50%] bottom-[-25%] translate-x-[-50%] translate-y-[-50%] leading-[22.4px] py-[16px] px-[65px] flex items-center gap-[10px]">購入はこちら <AiOutlineDoubleRight/></button>
      </div>
    </div>
  );
};

export default Keyvisual;
