import React, { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Slider/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
