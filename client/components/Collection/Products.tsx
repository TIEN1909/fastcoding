import Image from "next/image";
import React from "react";
import { Product } from "../../types/type";
const Products = (props: Product) => {
  const { image, face, name, price } = props;
  return (
    <div className="cursor-pointer ">
      <div className="w-[250px] h-[325px]">
        <Image src={image} width={250} height={325} alt={name} />
      </div>
      <h3 className="text-center mt-[15px] text-[#f4584b] text-[14px] leading-[19.6px]">
        {face}
      </h3>
      <p className="text-center mt-[5px] text-[#707070] leading-[22.4px] font-medium">
        {name}
      </p>
      <span className=" block text-center mt-[3px] text-[#333333] leading-[22.4px] font-medium">
        ¥{price}
      </span>
    </div>
  );
};

export default Products;
