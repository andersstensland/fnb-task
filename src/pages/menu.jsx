"use client";
import CartFooter from "@/components/cartfooter";
import TopBar from "@/components/menu/topbar";
import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import "@/styles/globals.css";
import { useState } from "react";
import FetchMenu from "./api/fetchMenu";

const Menu = () => {
  const [order, setOrder] = useState({});

  return (
    <>
      <Navbar />
      <SecondNavbar />
      <TopBar />
      <FetchMenu />
      {/* Render cart component on added order remove if order length is 0 */}
      {<CartFooter itemCount={0} total={0} />}
    </>
  );
};

export default Menu;
