import React from "react";
import Products from "./Products";
import { collections } from "../../datas/data";
import { Product } from "../../types/type";

const Collection: React.FC<Product> = ({id, image, face, name,price}) => {
  return (
    <section className="px-[215px]  mt-[80px] pb-[100px]">
      <span className="block text-center text-[#c5c5c5] text-[14px] font-medium tracking-[0.35px] leading-[19.6px]">
        スタッフおすすめの商品
      </span>
      <h2 className="text-center text-[27px] leading-[37.8px] mt-[6px] font-semibold">
        FROM EDITOR'S PICK COLLECTION
      </h2>
      <span className="block mt-[24px] text-center ">---------</span>
      <div className=" flex items-center gap-x-[30px] mt-[45px]">
        {collections.map((collection) => {
          return (
            <div key={collection.id}>
              <Products
                id={collection.id}
                image={collection.image}
                face={collection.face}
                name={collection.name}
                price={collection.price}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;
