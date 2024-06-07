"use client";
import CartFooter from "@/components/cartfooter";
import TopBar from "@/components/menu/topbar";
import Navbar from "@/components/navbar";
import SecondNavbar from "@/components/secondnavbar";
import "@/styles/globals.css";
import FetchMenu from "./api/fetchMenu";
import Link from "next/link";
import { useCart } from "@/context/cartcontext";

const Menu = () => {
  const { getItemCount, cart } = useCart();

  console.log(cart);
  console.log(getItemCount(cart)); // returns 0 ?
  return (
    <>
      <Navbar />
      <SecondNavbar />
      <TopBar />
      <FetchMenu />
      {/* Render cart component on added order remove if order length is 0 */}
      {getItemCount(cart) > 0 && (
        <Link href="payment">
          <CartFooter />
        </Link>
      )}
    </>
  );
};

export default Menu;
