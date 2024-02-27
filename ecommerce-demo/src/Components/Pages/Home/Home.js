import React from "react";
import Banner from "../../Banner/Banner";
import Header from "../../Common/Header/Header";
import { Outlet } from "react-router-dom";
import Product from "../../Shop/Product";

function Home() {
  return (

    <>
      <Product />
    </>
  );

}

export default Home;
