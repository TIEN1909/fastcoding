import Head from "next/head";
import { GetServerSideProps } from "next";
import Brand from "@/components/Brand/Brand";
import Seller from "@/components/Seller/Seller";
import Guide from "@/components/Guide/Guide";
import Advantages from "@/components/Advantages/Advantages";
import Collection from "@/components/Collection/Collection";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import Community from "@/components/Community/Community";

interface Props {
  data: {
    id?: number;
    image: string;
    face: string;
    name: string;
    price: string;
  }[];
}
export default function Home({ data }:Props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Brand />
      <Seller datas={data} />
      <Guide />
      <Advantages img="image" ingredient="Some ingredient" desc="Description"/>
      <Collection image="image" face="face" name="name" price="price" />
      <Testimonial/>
      <Blog/>
      <Community/>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:8080/v1/products");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
