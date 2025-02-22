import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <p className="logo">
          <Link href="/"><Image src="/logo.png" width="1024" height="1024" className="logo-img"></Image></Link>
        </p>
        <div className="nav-menu">
        <div className="nav-menu-item">Men</div>
        <div className="nav-menu-item">Women</div>
        <div className="nav-menu-item">Kids</div>
        <div className="nav-menu-item">Customize</div>
        </div>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
